import IChoice from "../../models/Choice.type";
import executeCommand from "../../utils/executeCommand.ts";

const packageLookup = {
  tailwindcss:
    "tailwindcss@latest postcss@latest autoprefixer@latest && npx tailwindcss init",
  redux: "redux react-redux @reduxjs/toolkit",
};

const installPackages = async (answers: IChoice, projectName: string) => {
  const finalDevCommand = ["npm install --save-dev"];
  const finalCommand = ["npm install"];
  let hasTailwindCss = answers["tailwindcss"];
  if (hasTailwindCss) {
    finalDevCommand.push(packageLookup["tailwindcss"]);
  }
  if (answers["redux"]) {
    finalCommand.push(packageLookup["redux"]);
  }

  console.log("=======================");
  console.log("INSTALLING PACKAGES");
  await executeCommand(
    `cd ${projectName} && ${finalCommand.join(" ").trim()} && ${finalDevCommand
      .join(" ")
      .trim()}`
  );
  console.log("=======================");
};

export default installPackages;
