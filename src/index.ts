import downloadAllFiles from './tasks/download-all-files.js';
import downloadWebjs from './tasks/download-webjs.js';
import getChunks from './tasks/getChunks.js';
import getClassesNames from './tasks/getClassesNames.js';
import getDepGraph from './tasks/getDepGraph.js';
import getEndpoints from './tasks/getEndpoints.js';
import getIntlStrings from './tasks/getIntlStrings.js';
import getLibDiscore from './tasks/getLibDiscore.js';
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
            //await downloadAllFiles(build);
        },
        tasks,
    );

    await perf<void>(
        'get chunks contents',
        async () => {
//            await getChunks(build);
        },
        tasks,
    );

    await perf<void>(
        'get en-us intl strings',
        async () => {
  //          await getIntlStrings(build);
        },
        tasks,
    );

    await perf<void>(
        'get endpoints',
        async () => {
    //        await getEndpoints(build);
        },
        tasks,
    );

    await perf<void>(
        'get classes names from css files',
        async () => {
      //      await getClassesNames(build);
        },
        tasks,
    );

    await perf<void>(
        'get libdiscore wasm file and decompile it',
        async () => {
            await getLibDiscore(build);
        },
        tasks,
    );

    build.entryChunk = build.webjs.match(
        /__webpack_exports__=__webpack_require__\((?<entryChunk>\d+)\)/,
    ).groups?.entryChunk;

    const DEP_GRAPH_ENABLED = false;

    await perf<void>(
        'generate dependency graph',
        async () => {
            if (DEP_GRAPH_ENABLED) await getDepGraph(build);
        },
        tasks,
    );

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
