import { rm } from 'fs/promises';

import getChunksByCode from '../ast/getChunks.js';
import { Build } from '../types.js';
import { readFile, writeFile } from '../utils/fs.js';

async function saveChunks(
    chunks: Record<string, string>,
    type: string = 'normal',
) {
    for (const [chunkId, content] of Object.entries(chunks)) {
        await writeFile(
            './build/chunks/' +
                (type === 'normal' ? '' : 'libdiscore/') +
                chunkId +
                '.js',
            content,
        );
    }
}
export default async function getChunks(build: Build): Promise<void> {
    for (const [moduleId, path] of Object.entries(build.modules.js)) {
        const code = await readFile(`./build/assets/${path}.js`, false);
        await saveChunks(await getChunksByCode(code, moduleId, path + '.js'));
        await rm('./build/assets/' + path + '.js');
    }
    const chunkStart = build.webjs.indexOf('var __webpack_modules__=');
    const chunkEnd = build.webjs.indexOf(',__webpack_module_cache__={};');
    await saveChunks(
        await getChunksByCode(
            // use this trick to make web.js use jsonp style
            `'use strict';(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([['web'], ${build.webjs.slice(chunkStart, chunkEnd).replace('var __webpack_modules__=', '').replace(',__webpack_module_cache__={};', '')},]);`,
            'web.js',
            'web.js',
        ),
    );

    const startMatch = build.libdiscore.match(/={\d+\(/)[0];
    const endMatch = build.libdiscore.match(/,[\w$_]+={};function/)[0];

    // we find the index of the { character
    const start = build.libdiscore.indexOf(startMatch) + 1;
    // find } before ,l={};function
    const end = build.libdiscore.indexOf(endMatch) - 1;
    // libdiscore
    await saveChunks(
        await getChunksByCode(
            // use this trick to make web.js use jsonp style
            `'use strict';(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([['libdiscore'], ${build.libdiscore.slice(start, end)},]);`,
            'libdiscore.js',
            'libdiscore.js',
        ),
        'libdiscore',
    );
}
