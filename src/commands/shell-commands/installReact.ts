import { exec } from "child_process";
import IChoice from "../../models/Choice.type";
import executeCommand from "../../utils/shell-commands/executeCommand.ts";
import chalk from "chalk";

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

  console.log(chalk.cyan("======================="));
  console.log(chalk.bgCyan("INSTALLING REACT"));
  await executeCommand(finalCommand.join(" ").trim());
  console.log(chalk.cyan("======================="));
};

export default installReact;
