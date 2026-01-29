import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export const $ = async (cmd: string, options: { cwd?: string } = {}) => {
    try {
        const { stdout, stderr } = await execAsync(cmd, options);
        if (stderr) console.error(stderr);
        return stdout.trim();
    } catch (err) {
        console.error(`Command failed: ${cmd}`);
        throw err;
    }
};
