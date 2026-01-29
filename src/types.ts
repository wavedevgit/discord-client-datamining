export enum Channels {
    stable = 0,
    beta = 1,
    alpha = 2,
}

export interface Build {
    /**
     * Build channel
     */
    channel: Channels;
    /**
     * Version code ({major}{channnel}{minor})
     */
    versionCode: number;

    /**
     * Build number
     */
    buildNumber: number;

    /**
     * Build version hash (commit hash)
     */
    versionHash: string;
    /**
     * User agent (Discord-Android/{majorVer}{channel}{minorVer};RNA)
     */
    userAgent: string;

    /**
     * Assets hashes (asset path -> md5 hash)
     */
    assets: Record<string, string>;

    /**
     * Modules mappings (path -> id)
     */
    modules: {
        /**
         * Module id
         */
        id: string;
        /**
         * Module dependency map
         */
        deps: number[];
        /**
         * Module path taken from it's factory code
         */
        path: string | undefined;
        /**
         * Module type
         */
        type: 'asset' | 'unknown' | 'discord_code';
    }[];

    /**
     * Experiments (todo)
     */
    experiments: undefined;
}
