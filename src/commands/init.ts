import inquirer from "inquirer";
import { execSync } from "child_process";
import askQuestions from "./questions/askQuestions.ts";
import QuestionTitles from "../models/QuestionTitles.type.ts";
import confirmChoices from "./questions/confirmChoice.ts";
import titleLookup from "../utils/titleLookup.ts";
import createFolderStructure from "./shell-commands/createFolderStructure.ts";
import installTailwind from "./shell-commands/installTailwind.ts";

const initCommand = async () => {
  // const baseQuestions: QuestionTitles[] = [
  //   "tailwindcss",
  //   "typeScript",
  //   "redux",
  //   "vite",
  //   "folderStructure",
  // ];
  // let answers = await askQuestions(baseQuestions);
  // let shouldChange = await confirmChoices(answers);

  // while (shouldChange) {
  //   // Ask which questions to modify
  //   const formatedChoices = Object.keys(answers).map((answer) => {
  //     const correctAnswerType = answer as QuestionTitles;
  //     return { name: titleLookup[correctAnswerType], value: answer };
  //   });
  //   const questionsToModify = await inquirer.prompt([
  //     {
  //       type: "checkbox",
  //       message: "Which options would you like to change?",
  //       name: "questions",
  //       choices: formatedChoices,
  //     },
  //   ]);

  //   const changedAnswers = await askQuestions(questionsToModify.questions);

  //   answers = {
  //     ...answers,
  //     ...changedAnswers,
  //   };

  //   shouldChange = await confirmChoices(answers);
  // }
  installTailwind();
  createFolderStructure();
};

export default initCommand;
