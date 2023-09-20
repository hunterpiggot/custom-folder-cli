interface IFolderStructure {
  name: string;
  type: "file" | "folder";
  children?: IFolderStructure[];
  content?: string; // New field for file content
}

export default IFolderStructure;
