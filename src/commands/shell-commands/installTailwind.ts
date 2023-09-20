import { exec } from "child_process";

const installTailwind = () => {
  exec(
    "npx tailwindcss init",
    (error: Error | null, stdout: string | Buffer, stderr: string | Buffer) => {
      if (error) {
        console.error(`Exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    }
  );
};

export default installTailwind;
