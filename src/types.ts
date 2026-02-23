type DepGraph = {
    [chunkId: string]: DepGraph;
};

export interface Experiment {
    kind: 'user' | 'guild';
    id: string;
    label: string;
    defaultConfig: Record<string, string | boolean | string[]>;
    treatments: Treatment[];
}

export interface Treatment {
    id: number;
    label: string;
    config: Record<string, string | boolean | string[]>;
}

export interface ApexExperiment {
    name: string;
    kind: 'user' | 'guild';
    defaultConfig?: Variant;
    variations: Record<number, Variant>;
}

export interface Variant {
    enabled: boolean;
    variant: number;
}

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
     * Experiments
     */
    experiments: Experiment | ApexExperiment[];

    /**
     * Dependency graph
     */
    dependencyGraph: DepGraph;
}
