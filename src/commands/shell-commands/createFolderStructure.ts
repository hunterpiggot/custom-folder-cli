import chalk from "chalk";
import fs from "fs";
import path from "path";
import recursiveCreateFolderStructure from "../../utils/shell-commands/recursiveCreateFolderStructure.ts";
import folderStructureTypeA from "../../utils/file-structures/folderStructureTypeA.ts";
import folderStructureTypeB from "../../utils/file-structures/folderStructureTypeB.ts";
import IChoice from "../../models/Choice.type.ts";
import IFolderStructure from "../../models/FolderStructure.interface.ts";

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
