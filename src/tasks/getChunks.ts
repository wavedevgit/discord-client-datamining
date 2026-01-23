import { rmdir } from 'fs/promises';

import getChunksByCode from '../ast/getChunks.js';
import { Build } from '../types.js';
import { readFile, writeFile } from '../utils/fs.js';

async function saveChunks(chunks: Record<string, string>) {
    for (const [chunkId, content] of Object.entries(chunks)) {
        await writeFile('./build/chunks/' + chunkId + '.js', content);
    }
}
export default async function getChunks(build: Build): Promise<void> {
    for (const [moduleId, path] of Object.entries(build.modules.js)) {
        const code = await readFile(`./build/assets/${path}.js`, false);
        await saveChunks(await getChunksByCode(code, moduleId, path + '.js'));
        await rmdir('./build/assets/' + path + '.js');
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
}
