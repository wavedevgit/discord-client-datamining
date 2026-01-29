import fs from 'fs/promises';

const build = JSON.parse(await fs.readFile('./build/build.json', 'utf-8'));
const Channels = { 0: 'stable', 1: 'beta', 2: 'alpha' };
console.log(
    Channels[build.channel],
    build.versionCode + ' (' + build.versionHash + ')',
);
