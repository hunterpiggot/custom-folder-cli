import inquirer from "inquirer";
import getFormatedTitle from "../../utils/questions/getFormatedTitle.js";
import titleLookup from "../../utils/questions/titleLookup.js";
const confirmChoices = async (choices) => {
    console.log("Here are your current answers:");
    for (const [question, answer] of Object.entries(choices)) {
        const correctQuestionType = question;
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
