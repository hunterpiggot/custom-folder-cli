import { exec } from "child_process";
import { promisify } from "util";
const execAsync = promisify(exec);
const executeCommand = async (command) => {
    try {
        const { stdout, stderr } = await execAsync(command);
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    }
    catch (error) {
        console.error(`Exec error: ${error}`);
    }
};
export default executeCommand;
