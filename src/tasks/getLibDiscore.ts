import { exec } from 'node:child_process';

import { Build } from '../types.js';
import { writeFile } from '../utils/fs.js';
import { asset } from '../utils/requests.js';

export default async function getLibDiscore(build: Build): Promise<void> {
    const { id } = build.libdiscore.match(
        /[\w_]+\.exports(\s+|)=(\s+|)[\w_]+\.v\([\w_]+,(\s+|)[\w_]+\.id,(\s+|)"(?<id>[a-f0-9]{16})",(\s+|){/,
    ).groups;
    if (!id) {
        console.log('no libdiscore wasm file found');
        return;
    }
    build.libdiscore = asset(id + '.module.wasm');
    await writeFile(
        './libdiscore.wasm',
        await (
            await fetch(asset('./build/' + id + '.module.wasm'), {
                headers: {
                    'user-agent':
                        'Mozilla/5.0 (Linux; arm_64; Android 10; Nokia 3.1 Plus) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 YaBrowser/20.4.3.90.00 SA/1 Mobile Safari/537.36',
                },
            })
        ).arrayBuffer(),
    );
    const wasmFile = './build/' + id + '.module.wasm';
    const watFile = wasmFile.replace(/\.wasm$/, '.wat');
    const cFile = wasmFile.replace(/\.wasm$/, '.c');

    try {
        await exec('wasm2wat ' + wasmFile + ' -o ' + watFile);

        // wat -> pseudo c
        await exec('wasm-decompile ' + watFile);

        console.log('done.');
        console.log('saved pseudo-C of libdiscore  to:', cFile);
    } catch (err) {
        console.error('failed:', err.message);
        process.exit(1);
    }
}
