import fs from "fs";
import path from "path";
const createFile = (path, content) => {
    fs.writeFileSync(path, content || ""); // If content is undefined, an empty file will be created
};
const recursiveCreateFolderStructure = (structure, parentPath) => {
    if (!structure || !parentPath) {
        return;
    }
    if (typeof parentPath !== "string" || typeof structure.name !== "string") {
        return;
    }
    const currentPath = path.join(parentPath, structure.name);
    if (structure.type === "folder") {
        // Create folder
        fs.mkdirSync(currentPath, { recursive: true });
        // Loop through each child and call createStructure recursively
        (structure.children || []).forEach((child) => {
            recursiveCreateFolderStructure(child, currentPath);
        });
    }
    else if (structure.type === "file") {
        // Create file
        createFile(currentPath, structure.content);
    }
};
export default recursiveCreateFolderStructure;
// Your folder structure object
