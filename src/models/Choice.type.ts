import QuestionTitles from "./QuestionTitles.type";

type IChoice = {
  [key in QuestionTitles]: boolean | string;
};

export default IChoice;
