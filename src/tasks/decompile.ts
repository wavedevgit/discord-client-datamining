import { rm } from 'fs/promises';

import { Build } from '../types.js';
import { readFile, writeFile } from '../utils/fs.js';
import { $ } from '../utils/shell.js';

export default async function decompile(build: Build): Promise<void> {
    await $('git clone https://github.com/P1sec/hermes-dec.git');
    await $(
        'python3 hermes-dec/hbc_decompiler.py ./build/assets/index.android.bundle ./code.txt',
    );
}
