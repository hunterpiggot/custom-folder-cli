import inquirer from "inquirer";
import QuestionTitles from "../../models/QuestionTitles.type.js";
import IChoice from "../../models/Choice.type.js";
import getFormatedTitle from "../../utils/questions/getFormatedTitle.js";
import titleLookup from "../../utils/questions/titleLookup.js";

const confirmChoices = async (choices: IChoice): Promise<boolean> => {
  console.log("Here are your current answers:");
  for (const [question, answer] of Object.entries(choices)) {
    const correctQuestionType = question as QuestionTitles;
    const formatedAnswer = getFormatedTitle(correctQuestionType, answer);
    console.log(` - ${titleLookup[correctQuestionType]}: ${formatedAnswer}`);
  }

  // Ask for confirmation to change anything
  const { change } = await inquirer.prompt([
    {
      type: "confirm",
      name: "change",
      message: "Would you like to change anything?",
    },
  ]);
  return change;
};

export default confirmChoices;
