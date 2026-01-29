import { rm } from 'fs/promises';

import { Build, Channels } from '../types.js';
import { readFile } from '../utils/fs.js';
import { getText } from '../utils/requests.js';
import { $ } from '../utils/shell.js';

export default async function downloadApk(): Promise<Build> {
    const { latest } = await getText<{
        latest: { alpha: number; stable: number; beta: number };
    }>('https://tracker.vendetta.rocks/tracker/index', true);

    const biggestVersionCode = Math.max(...Object.values(latest));
    const [channel, versionCode] = Object.entries(latest).find(
        (entry) => entry[1] === biggestVersionCode,
    );

    const build: Build = {
        channel: Channels[channel],
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
    await $('apktool d base.apk -o build -f --no-src');
    const manifest = await readFile('./build/assets/manifest.json', true);
    await $(
        'wget https://github.com/skylot/jadx/releases/download/v1.4.7/jadx-1.4.7.zip &&  unzip -o jadx-1.4.7.zip -d jadx',
    );
    // decompile dex to java
    await $(
        'rm -rf build/src && mkdir -p build/src && ./jadx/bin/jadx -d ./build/src build/*.dex',
    );
    await rm('./jadx', { recursive: true, force: true });
    await rm('./jadx-1.4.7.zip', { force: true });

    build.assets = manifest.hashes;
    build.buildNumber = Number(manifest.metadata.build);
    build.versionHash = manifest.metadata.commit;
    return build;
}
