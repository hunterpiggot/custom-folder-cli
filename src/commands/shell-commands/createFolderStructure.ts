import fs from "fs";

const createFolderStructure = () => {
  fs.mkdir(
    "test-folder",
    { recursive: true },
    (err: NodeJS.ErrnoException | null) => {
      if (err) {
        console.error(`Error creating folder: ${err}`);
        return;
      }
      console.log("Folder created");
    }
  );
};

export default createFolderStructure;
