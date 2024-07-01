import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function runCommand(command: string): Promise<string> {
    try {
        const { stdout, stderr } = await execAsync(command);

        if (stderr) {
            throw new Error(stderr);
        }

        return stdout.trim();
    } catch (error) {
        throw new Error(`Command failed: ${error.message}`);
    }
}
