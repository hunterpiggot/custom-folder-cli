import inquirer from "inquirer";

export const confirmPrompt = (message: string) => {
  return inquirer.prompt([
    {
      type: "confirm",
      name: "confirmation",
      message: message,
    },
  ]);
};
