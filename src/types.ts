type DepGraph = {
    [chunkId: string]: DepGraph;
};

export interface Build {
    /**
     * Deleted after we are done from using webjs contents
     */
    webjs?: string;
    builtAt: number;
    buildNumber: number;

    /**
     * Build version hash
     */
    versionHash: string;
    /**
     * Entry chunk id (first chunk loaded and exported on __webpack_exports variable)
     */
    entryChunk: string;
    /**
     * Wasm File path
     */
    libdiscore: string;
    /**
     * Modules mappings (module id -> hash, path = [hash].js or [hash].css)
     */
    modules: { js: Record<string, string>; css: Record<string, string> };
    /**
     * Css files classes names (module id -> classes list)
     */
    classes: Record<string, string[]>;
    /**
     * Intl strings (only for en-US)
     */
    intl: Record<string, string>;

    /**
     * Endpoints
     */
    endpoints: Record<string, string>;

    /**
     * Dependency graph
     */
    dependencyGraph: DepGraph;
}
