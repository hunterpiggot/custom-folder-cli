import inquirer from "inquirer";
import QuestionTitles from "../../models/QuestionTitles.type.ts";
import allQuestions from "../../utils/questions/allQuestions.ts";
import IChoice from "../../models/Choice.type.ts";

const askQuestions = async (questions: QuestionTitles[]): Promise<IChoice> => {
  const mappedQuestions = questions.map((question) => allQuestions[question]);
  const answers = await inquirer.prompt(mappedQuestions);
  return answers;
};

export default askQuestions;
