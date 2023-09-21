import chalk from "chalk";
import path from "path";
import recursiveCreateFolderStructure from "../../utils/shell-commands/recursiveCreateFolderStructure.js";
import folderStructureTypeA from "../../utils/file-structures/folderStructureTypeA.js";
import folderStructureTypeB from "../../utils/file-structures/folderStructureTypeB.js";
const createFolderStructure = (answers, projectName) => {
    let folderStructure = [];
    if (answers.folderStructure === "a") {
        folderStructure = folderStructureTypeA;
    }
    else if (answers.folderStructure === "b") {
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
