import chalk from 'chalk';

import getModules from '../ast/getModules.js';
import { Build } from '../types.js';
import { asset, getText, writeFile } from '../utils/index.js';

const downloadAll = async (
    modulesToDownload: Record<string, string>,
    extension: '.js' | '.css',
) => {
    const entries = Object.entries(modulesToDownload);
    const downloadFile = async ([, path]: [string, string]) => {
        const data = await getText(asset(path + extension));
        await writeFile('./build/assets/' + path + extension, data);
        console.log(
            `${chalk.magentaBright('>>')} ${chalk.blueBright('downloaded')}: ${path}${extension}`,
        );
    };

    const concurrency = 3;
    let i = 0;

    while (i < entries.length) {
        const batch = entries.slice(i, i + concurrency); // take 3 files
        await Promise.all(batch.map(downloadFile)); // download in parallel
        i += concurrency;
    }
};

export default async function downloadAllFiles(build: Build) {
    const modules = await getModules(build.webjs);
    build.modules = modules;
    await writeFile('./build/modules.json', modules);
    await downloadAll(modules.js, '.js');
    await downloadAll(modules.css, '.css');
}
