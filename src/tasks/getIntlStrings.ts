import { readdir } from 'fs/promises';

import getJSONParse from '../ast/getJSONParse.js';
import IntlStrings from '../parsers/intl.js';
import { Build } from '../types.js';
import chunk from '../utils/chunk.js';

export default async function getIntlStrings(build: Build): Promise<void> {
    const chunks = await readdir('./build/chunks/');
    // find all en-us chunks
    const enUSChunks = new Set<string>();

    for (const chunkId of chunks) {
        if (chunkId === 'readme.md' || chunkId === 'libdiscore') continue;
        const content = await chunk(chunkId.replace('.js', ''));
        // skip ones without a createLoader reference
        if (!content.includes('createLoader:')) continue;
        const match = content.match(
            /("|')en-US("|'):\(\)=>.+?\(("|')(?<module>\d+).+\.then\(.+bind\(.,(?<chunkId>\d+)\)/,
        );
        if (match?.groups?.chunkId) enUSChunks.add(match.groups.chunkId);
    }

    // now we parse all chunks
    for (const chunkId of enUSChunks) {
        const content = await chunk(chunkId);
        const strings = new IntlStrings([
            await getJSONParse(content),
        ]).parseStrings();
        for (const [k, v] of Object.entries(strings)) build.intl[k] = v;
    }
}
