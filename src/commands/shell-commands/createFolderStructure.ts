import chalk from "chalk";
import fs from "fs";
import path from "path";
import recursiveCreateFolderStructure from "../../utils/shell-commands/recursiveCreateFolderStructure.js";
import folderStructureTypeA from "../../utils/file-structures/folderStructureTypeA.js";
import folderStructureTypeB from "../../utils/file-structures/folderStructureTypeB.js";
import IChoice from "../../models/Choice.type.js";
import IFolderStructure from "../../models/FolderStructure.interface.js";

const createFolderStructure = (answers: IChoice, projectName: string) => {
  let folderStructure: IFolderStructure[] = [];

  if (answers.folderStructure === "a") {
    folderStructure = folderStructureTypeA;
  } else if (answers.folderStructure === "b") {
    folderStructure = folderStructureTypeB;
  }
  // TODO: Replace with project name
  console.log(chalk.whiteBright("======================="));
  console.log(chalk.bgWhiteBright("CREATING FOLDER STRUCTURE"));
  const correctCurrentPath = path.join(projectName, "src");
  folderStructure.forEach((folderStructure) => {
    recursiveCreateFolderStructure(folderStructure, correctCurrentPath);
  });
  console.log(chalk.whiteBright("======================="));
};

export default createFolderStructure;
