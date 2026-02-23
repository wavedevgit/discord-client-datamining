import { readdir } from 'fs/promises';

import { getExperiments as getExperimentsAst } from '../ast/getExperiments.js';
import { Build } from '../types.js';
import chunk from '../utils/chunk.js';

export default async function getExperiments(build: Build): Promise<void> {
    const chunks = await readdir('./build/chunks/');
    // find all en-us chunks
    const experiments = [];

    for (const chunkId of chunks) {
        if (chunkId === 'readme.md' || chunkId === 'libdiscore') continue;
        const content = await chunk(chunkId.replace('.js', ''));
        const experimentsForChunk = getExperimentsAst(content);
        if (experimentsForChunk.length === 0) continue;
        experiments.push(...experimentsForChunk);
    }
    build.experiments = experiments;
}
