import inquirer from "inquirer";
import QuestionTitles from "../../models/QuestionTitles.type.js";
import allQuestions from "../../utils/questions/allQuestions.js";
import IChoice from "../../models/Choice.type.js";

const askQuestions = async (questions: QuestionTitles[]): Promise<IChoice> => {
  const mappedQuestions = questions.map((question) => allQuestions[question]);
  const answers = await inquirer.prompt(mappedQuestions);
  return answers;
};

export default askQuestions;
