import { exec } from "child_process";

const installReact = async (usingTypeScript: boolean) => {
  exec(
    "npx create-react-app my-app --te",
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

export default installReact;
