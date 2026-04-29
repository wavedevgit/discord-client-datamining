import { readdir } from 'fs/promises';
import { createWriteStream } from 'node:fs';
import { Readable } from 'node:stream';
import { finished } from 'node:stream/promises';
import { spawn } from 'node:child_process';

import { Build } from '../types.js';
import chunk from '../utils/chunk.js';
import { asset } from '../utils/requests.js';

const WASM_REGEX = /([a-f0-9]{16})\.wasm/;

function run(cmd: string, args: string[]) {
    return new Promise<void>((resolve, reject) => {
        const p = spawn(cmd, args, { stdio: 'inherit' });

        p.on('error', reject);
        p.on('close', (code) => {
            if (code === 0) resolve();
            else reject(new Error(`${cmd} failed with code ${code}`));
        });
    });
}

export default async function getLibDiscore(build: Build): Promise<void> {
    const chunks = await readdir('./build/chunks/');

    let wasmId: string | null = null;

    for (const chunkFile of chunks) {
        if (chunkFile === 'readme.md') continue;

        const content = await chunk(chunkFile.replace('.js', ''));

        const match = content.match(WASM_REGEX);
        if (!match) continue;

        wasmId = match[1];
        break;
    }

    if (!wasmId) {
        console.log('no libdiscore wasm found in chunks (sadly)');
        return;
    }

    const wasmUrl = asset(`${wasmId}.wasm`);
    const wasmPath = './build/libdiscore.module.wasm';
    const cPath = wasmPath.replace(/\.wasm$/, '.c');

    const res = await fetch(wasmUrl);
    if (!res.body) throw new Error('no wasm body received');

    const writeStream = createWriteStream(wasmPath);

    await finished(
        Readable.fromWeb(res.body as any).pipe(writeStream)
    );

    await run('wasm-decompile', [wasmPath, '-o', cPath]);

    console.log('done.');
    console.log('libdiscore extracted to:', cPath);
}
