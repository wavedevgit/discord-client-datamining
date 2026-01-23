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
    modules: { js: Record<string, string>; css: Record<string, string> };
    versionHash: string;
    /**
     * Entry chunk id (first chunk loaded and exported on __webpack_exports variable)
     */
    entryChunk: string;
    /**
     * Dependency graph
     */
    dependencyGraph: DepGraph;
}
