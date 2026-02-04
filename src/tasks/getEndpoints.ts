import { readdir } from 'fs/promises';

import { default as getEndpointsByCode } from '../ast/getEndpoints.js';
import { Build } from '../types.js';
import chunk from '../utils/chunk.js';

export default async function getEndpoints(build: Build): Promise<void> {
    const chunks = await readdir('./build/chunks/');

    for (const chunkId of chunks) {
        if (chunkId === 'readme.md' || chunkId === 'libdiscore') continue;
        const content = await chunk(chunkId.replace('.js', ''));
        // skip ones without a createLoader reference
        if (!content.includes('ME:"/users/@me",')) continue;
        build.endpoints = await getEndpointsByCode(content);
    }
}
