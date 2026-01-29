import { Build, Channels } from '../types.js';
import { readFile } from '../utils/fs.js';
import { getText } from '../utils/requests.js';
import { $ } from '../utils/shell.js';

export default async function downloadApk(): Promise<Build> {
    const { latest } = await getText<{
        latest: { alpha: number; stable: number; beta: number };
    }>('https://tracker.vendetta.rocks/tracker/index');

    const biggestVersionCode = Math.max(...Object.values(latest));
    const [channel, versionCode] = Object.entries(latest).find(
        (entry) => entry[1] === biggestVersionCode,
    );

    const build: Build = {
        channel: Channels[channel], // pick any default channel
        versionCode,
        buildNumber: 0,
        userAgent: `Discord-Android/${versionCode};RNA`,
        versionHash: '',
        assets: {},
        modules: [],
        experiments: undefined,
    };

    // download apk and read manifest
    await $(
        `wget https://tracker.vendetta.rocks/tracker/download/${versionCode}/base -O base.apk`,
    );
    // TODO: switch to apktool
    await $('unzip -o base.apk -d build');
    const manifest = await readFile('./build/assets/manifest.json', true);

    build.assets = manifest.hashes;
    build.buildNumber = Number(manifest.metadata.build);
    build.versionHash = manifest.metadata.commit;
    return build;
}
