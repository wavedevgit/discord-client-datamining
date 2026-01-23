import downloadAllFiles from './tasks/download-all-files.js';
import downloadWebjs from './tasks/download-webjs.js';
import getChunks from './tasks/getChunks.js';
import { Build } from './types.js';
import { convertMillisHumanReadable, perf, writeFile } from './utils/index.js';

async function main() {
    console.log('Discord Chunks Datamining');

    const tasks = new Map<string, number>();

    const build = await perf<Build>(
        'download latest client web.js',
        downloadWebjs,
        tasks,
    );

    await perf<void>(
        'downloading js files & css files',
        async () => {
            // temp disable
            // eslint-disable-next-line no-constant-condition
            if (false) await downloadAllFiles(build);
        },
        tasks,
    );

    await perf<void>(
        'get chunks contents',
        async () => {
            await getChunks(build);
        },
        tasks,
    );

    build.entryChunk = build.webjs.match(
        /__webpack_exports__=__webpack_require__\((?<entryChunk>\d+)\)/,
    ).groups?.entryChunk;

    delete build.webjs;
    await writeFile('./build/build.json', build);
    console.table(
        Array.from(
            tasks.entries().map((task) => ({
                task: task[0],
                'time taken': convertMillisHumanReadable(task[1]),
            })),
        ),
    );
}

main();
