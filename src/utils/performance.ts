import chalk from 'chalk';

type PerformanceUtil = {
    /**
     * Save start time
     */
    start(): void;
    /**
     * Save end time
     */
    stop(): void;
    /**
     * Start time in ms
     */
    _start: number;
    /**
     * End time in ms
     */
    _end: number;
    /**
     * Get total time taken in ms
     */
    get(): number;
};
function Performance(this: PerformanceUtil) {
    this._start = 0;
    this._end = 0;
    this.start = function () {
        this._start = Date.now();
    };
    this.stop = function () {
        this._end = Date.now();
    };
    this.get = function () {
        return this._end - this._start;
    };
}

function convertMillisHumanReadable(ms: number) {
    // ms
    if (ms < 1e3) return String(ms).concat(' ms');
    // ses
    if (ms >= 1e3 && ms < 60 * 1e3) return String(ms / 1e3).concat(' s');
    // minutes
    if (ms >= 60 * 1e3 && ms < 60 * 60 * 1e3)
        return String(ms / 1e3 / 60).concat(' min');
    // hours
    if (ms >= 60 * 60 * 1e3) return String(ms / 1e3 / (60 * 60)).concat(' h');
    // fallback to ms
    return String(ms).concat(' ms');
}

/**
 * Utility for logging tasks time taken in ms
 * @param task The task title
 * @param handler Handler that does the task
 */
async function perf<T>(
    task: string,
    handler: () => Promise<T>,
    tasks: Map<string, number>,
): Promise<T> {
    console.log(
        `${chalk.magentaBright('>>')} ${chalk.blueBright('starting task')}: ${chalk.white(task)}`,
    );
    const performance = new Performance();
    performance.start();
    const returnValue = await handler();
    performance.stop();
    console.log(
        `${chalk.magentaBright('>>')} ${chalk.greenBright('task complete')}: ${chalk.white(task)}\n${chalk.magentaBright('>>')} ${chalk.yellowBright('total time taken')}: ${chalk.greenBright(convertMillisHumanReadable(performance.get()))}.`,
    );

    if (tasks) tasks.set(task, performance.get());
    return returnValue;
}

export { convertMillisHumanReadable, perf };
