import QuestionTitles from "./QuestionTitles.type.js";

type IChoice = {
  [key in QuestionTitles]: boolean | string;
};

export default IChoice;
