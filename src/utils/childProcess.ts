// Utility functions for executing shell commands
import { execSync } from "child_process";

export const executeCommand = (command: string) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.error(`Error executing command: ${command}`);
  }
};
