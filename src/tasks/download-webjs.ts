import { Build } from '../types.js';
import { asset, getText } from '../utils/requests.js';

export default async function downloadWebjs(): Promise<Build> {
    const IS_DEVPORTAL = process.env.IS_DEVPORTAL === 'true';
    const html = await getText(
        IS_DEVPORTAL
            ? 'https://canary.discord.com/developers/applications'
            : 'https://canary.discord.com/app',
    );
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
            webjs: await getText(
                    asset(
                        html.match(
                            IS_DEVPORTAL
                                ? /index\.[a-f0-9]{16}\.js/
                                : /web\.[a-f0-9]{16}\.js/,
                        )[0],
                    ),
                ),        libdiscore: IS_DEVPORTAL
            ? await getText(
                  asset(
                      html.match(/libdiscore-wasm-fetch\.[a-f0-9]{16}\.js/)[0],
                  ),
              )
            : '',
        entryChunk: '',
        modules: {
            js: {},
            css: {},
        },
        classes: {},
        intl: {},
        experiments: [],
        endpoints: {},
        dependencyGraph: {},
    };
}
