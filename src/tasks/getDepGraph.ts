import { readdir } from 'fs/promises';

import { Build } from '../types.js';
import { readFile } from '../utils/fs.js';

async function chunk(chunkId: string) {
    return await readFile('./build/chunks/' + chunkId + '.js', false);
}
async function generateGraph(
    id: string,
    content: string,
    chunks: string[],
    visited: Set<string>,
    onlyImports: boolean,
) {
    const normal = [...content.matchAll(/[\s]+\w{1}\((?<chunkId>\d+)\)/gm)].map(
        (item) => item.groups?.chunkId,
    );
    const lazyLoaded = [
        ...content.matchAll(
            /\w{1}\.e\("\d+"\).then\(\w{1}\.t.bind\(\w{1},[\s]+(?<chunkId>\d+),/gm,
        ),
    ].map((item) => item.groups?.chunkId);
    const chunksIds = [...normal, ...lazyLoaded]
        .filter((item: string) => item)
        .filter((e) => chunks.includes(e + '.js'));
    if (onlyImports) return chunksIds;
    const result = {};
    for (const chunkId of chunksIds) {
        if (visited.has(chunkId)) {
            result[chunkId] = {};
            continue;
        }
        visited.add(chunkId);

        result[chunkId] = await generateGraph(
            chunkId,
            await chunk(chunkId),
            chunks,
            visited,
            false,
        );
    }
    return result;
}

export default async function getDepGraph(build: Build): Promise<void> {
    const chunks = await readdir('./build/chunks/');
    const visited = new Set<string>();

    build.dependencyGraph = await generateGraph(
        build.entryChunk,
        await chunk(build.entryChunk),
        chunks,
        visited,
        false,
    );
}
