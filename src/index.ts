import decompile from './tasks/decompile.js';
import downloadApk from './tasks/download-apk.js';
import { Build } from './types.js';
import { convertMillisHumanReadable, perf, writeFile } from './utils/index.js';

async function main() {
    console.log('Discord Android Datamining');

    const tasks = new Map<string, number>();

    const build = await perf<Build>(
        'download latest apk and unzip',
        downloadApk,
        tasks,
    );

    await perf<void>(
        'decompile hermes bytecode',
        async () => {
            await decompile(build);
        },
        tasks,
    );

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
