import chalk from "chalk";
import inquirer from "inquirer";
import { execSync } from "child_process";
import askQuestions from "./questions/askQuestions.js";
import QuestionTitles from "../models/QuestionTitles.type.js";
import confirmChoices from "./questions/confirmChoice.js";
import titleLookup from "../utils/questions/titleLookup.js";
import createFolderStructure from "./shell-commands/createFolderStructure.js";
import installPackages from "./shell-commands/installPackages.js";
import installReact from "./shell-commands/installReact.js";

const initCommand = async () => {
  const baseQuestions: QuestionTitles[] = [
    "tailwindcss",
    "typeScript",
    "redux",
    "vite",
    "folderStructure",
  ];
  let answers = await askQuestions(baseQuestions);
  let shouldChange = await confirmChoices(answers);

  while (shouldChange) {
    // Ask which questions to modify
    const formatedChoices = Object.keys(answers).map((answer) => {
      const correctAnswerType = answer as QuestionTitles;
      return { name: titleLookup[correctAnswerType], value: answer };
    });
    const questionsToModify = await inquirer.prompt([
      {
        type: "checkbox",
        message: "Which options would you like to change?",
        name: "questions",
        choices: formatedChoices,
      },
    ]);

    const changedAnswers = await askQuestions(questionsToModify.questions);

    answers = {
      ...answers,
      ...changedAnswers,
    };

    shouldChange = await confirmChoices(answers);
  }

  const projectNameAnswer = await inquirer.prompt([
    {
      type: "input",
      message: "What is the name of the project?",
      name: "projectName",
      validate: (input: string, error) => {
        if (input.includes(" ")) {
          console.log(
            "\n",
            "Name must be all lower case and contian no spaces"
          );
          return false;
        }
        if (input !== input.toLowerCase()) {
          console.log(
            "\n",
            "Name must be all lower case and contian no spaces"
          );
          return false;
        }
        return true;
      },
    },
  ]);

  await installReact(answers, projectNameAnswer.projectName);
  await installPackages(answers, projectNameAnswer.projectName);
  createFolderStructure(answers, projectNameAnswer.projectName);
  console.log(
    chalk.green("Everything is complete!"),
    "\n",
    "\n",
    "\n",
    chalk.magenta(`cd into ${projectNameAnswer.projectName} to get started!`)
  );
};

export default initCommand;
