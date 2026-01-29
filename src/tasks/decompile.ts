import { mkdir, rm } from 'fs/promises';
import path, { join } from 'path';

import { deminify } from '../parsers/deminify.js';
import { Build } from '../types.js';
import { readFile, writeFile } from '../utils/fs.js';
import { $ } from '../utils/shell.js';

export default async function decompile(build: Build): Promise<void> {
    await $('git clone https://github.com/P1sec/hermes-dec.git');
    await $(
        'python3 hermes-dec/hbc_decompiler.py ./build/assets/index.android.bundle ./code.txt',
    );
    // remove the decompiler as we are done from using it
    await rm('hermes-dec', { recursive: true, force: true });
    const code = await (await readFile('./code.txt', false)).split('\n');

    const indexs: { s: number; e: number }[] = [];

    // this parses the code to get all chunks
    let start: number;
    let func__d_id: string;

    for (let i = 0; i < code.length; i++) {
        const line = code[i];

        // chunks are declared using __d(id, ...)
        if (line.trim().match(/^r\d+ = r\d+\.__d;$/)) {
            start = i + 1;
            // skip to next line since first one is just __d decleration
            func__d_id = line.trim().split(' = ')[0];
            console.log('found new start', func__d_id, start);
        }
        if (
            line
                .trim()
                .match(
                    new RegExp(
                        `^r\\d+ = ${func__d_id}\\.bind\\(r\\d+\\)\\(r\\d+, r\\d+, r\\d+\\);$`,
                    ),
                ) &&
            // verify if module id is present as there is multiple codes that have the same style
            code[i - 2].trim().match(/^r\d+ = \d+;$/) &&
            // verify if deps list is present as there is multiple codes that have the same style
            ((deps) => {
                deps = deps.trim().split(' = ')[1].replace(';', '');
                try {
                    JSON.parse(deps);
                    return true;
                } catch {
                    if (deps !== 'new Array(0)') return false;
                    return true;
                }
            })(code[i - 1])
        ) {
            // save to parse later
            indexs.push({ s: start, e: i });
            console.log('found new end', i);
        }
    }
    const modules = [];

    for (const chunk of indexs) {
        const module = {
            id: null,
            deps: [],
            path: null,
            type: 'unknown',
        };
        let chunkCode = code.slice(chunk.s, chunk.e);
        // there is 3 variables declared
        // first one is factory
        // second is module id
        // last is deps list

        const [deps, moduleId] = [chunkCode.pop(), chunkCode.pop()];
        // everything before is factory code
        // remove first rN = function (....) {
        // and last }
        chunkCode.shift();
        chunkCode.pop();

        module.id = moduleId.trim().split(' = ')[1].replace(';', '');

        // deps is js code that sometimes is an array, sometimes new Array(0)
        // we parse it without evaling it
        module.deps = ((deps) => {
            try {
                // try parsing json
                return JSON.parse(deps);
            } catch {
                // if fails then parse using known codes
                if (deps === 'new Array(0)') return [];
                // fallback to returning the string itself
                return deps;
            }
        })(deps.trim().split(' = ')[1].replace(';', ''));
        let asset = chunkCode
            .join('\n')
            .match(
                /\br\d+\b = {'__packager_asset': true, 'httpServerLocation': '(?<httpServerLocation>.+?)', 'width': (?<width>\d+), 'height': (?<height>\d+), 'scales': null, 'hash': '(?<hash>[a-f0-9]{32})', 'name': '(?<name>.+?)', 'type': '(?<type>.+?)'};/,
            );
        if (asset) asset = asset.groups;

        // path is in factory code
        module.path = ((factoryCode, asset) => {
            if (asset?.httpServerLocation)
                return join(
                    asset?.httpServerLocation,
                    asset?.name + '.' + asset?.type,
                );
            for (let i = 0; i < factoryCode.length; i++) {
                const line = factoryCode[i];
                // it is declared as
                // rN = rN.fileFinishedImporting;
                // rP = 'path';
                // rN = rN.bind(rN)(rP)
                if (line.trim().endsWith('.fileFinishedImporting;')) {
                    // get next line
                    return factoryCode[i + 1]
                        .trim()
                        .split("= '")[1]
                        .replace("';", '');
                }
            }
            return null;
        })(chunkCode, asset);

        module.type = asset ? 'asset' : 'discord_code';
        // discord code always has a path
        if (!module.path) module.type = 'unknown';

        chunkCode = chunkCode.join('\n');
        chunkCode = chunkCode.trim();

        const resultPath = path.join(
            './build/decompiled/src/',
            module.path ? module.path : module.id.concat('.js'),
        );

        try {
            await mkdir(path.dirname(resultPath), { recursive: true });
        } catch {
            // already created
        }

        await writeFile(
            resultPath,
            deminify(
                chunkCode.split('\n'),
                resultPath.endsWith('.ts') || resultPath.endsWith('.tsx'),
                module.path,
                module.deps,
            ),
        );

        modules.push(module);
    }

    await rm('./code.txt');
    await rm('./base.apk');
    await rm('./build/assets/index.android.bundle.patch');
    await rm('./build/assets/index.android.bundle');

    build.modules = modules;
}
