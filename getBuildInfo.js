import fs from 'fs/promises';

const build = JSON.parse(await fs.readFile('./build/build.json', 'utf-8'));
console.log(build.buildNumber + ' (' + build.versionHash + ')');
