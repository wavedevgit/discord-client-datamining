import { Build } from '../types.js';
import { asset, getText } from '../utils/requests.js';

export default async function downloadWebjs(): Promise<Build> {
    const html = await getText('https://canary.discord.com/app');
    return {
        builtAt: Number(
            html.match(/BUILT_AT":"(?<builtAt>\d+)",/).groups?.builtAt,
        ),
        buildNumber: Number(
            html.match(/BUILD_NUMBER":"(?<buildNumber>\d+)"/).groups
                ?.buildNumber,
        ),
        versionHash: html.match(/VERSION_HASH":"(?<versionHash>[a-f0-9]{40})"/)
            .groups?.versionHash,
        webjs: await getText(asset(html.match(/web\.[a-f0-9]{16}\.js/)[0])),
        entryChunk: '',
        modules: { js: {}, css: {} },
        classes: {},
        intl: {},
        endpoints: {},
        dependencyGraph: {},
    };
}
