import inquirer from "inquirer";
import allQuestions from "../../utils/questions/allQuestions.js";
const askQuestions = async (questions) => {
    const mappedQuestions = questions.map((question) => allQuestions[question]);
    const answers = await inquirer.prompt(mappedQuestions);
    return answers;
};
export default askQuestions;
