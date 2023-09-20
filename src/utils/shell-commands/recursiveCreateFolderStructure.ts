import fs from "fs";
import path from "path";

interface IFolderStructure {
  name: string;
  type: "file" | "folder";
  children?: IFolderStructure[];
  content?: string; // New field for file content
}

const createFile = (path: string, content?: string) => {
  fs.writeFileSync(path, content || ""); // If content is undefined, an empty file will be created
};

const recursiveCreateFolderStructure = (
  structure: IFolderStructure,
  parentPath: string | undefined
) => {
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
    (structure.children || []).forEach((child: any) => {
      recursiveCreateFolderStructure(child, currentPath);
    });
  } else if (structure.type === "file") {
    // Create file
    createFile(currentPath, structure.content);
  }
};

export default recursiveCreateFolderStructure;

// Your folder structure object
