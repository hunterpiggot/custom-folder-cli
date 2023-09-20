import { exec } from "child_process";
import IChoice from "../../models/Choice.type";
import executeCommand from "../../utils/executeCommand.ts";

const installReact = async (packages: IChoice, projectName: string) => {
  const finalCommand = [""];

  const hasTypeScript = packages["typeScript"];

  if (packages["vite"] === true) {
    finalCommand.push(`npx create-vite@latest ${projectName} --template`);
    if (hasTypeScript) {
      finalCommand.push("react-ts");
    } else {
      finalCommand.push("react");
    }
  } else {
    finalCommand.push(`npx create-react-app ${projectName}`);
    if (hasTypeScript) {
      finalCommand.push("--template typescript");
    }
  }

  console.log("=======================");
  console.log("INSTALLING REACT");
  await executeCommand(finalCommand.join(" ").trim());
  console.log("=======================");
};

export default installReact;
