import allQuestions from "./allQuestions";

const getFormatedTitle = (
  question: keyof typeof allQuestions,
  answer: string | boolean
): string => {
  if (typeof answer === "boolean") {
    if (answer) {
      return "Yes";
    }
    return "No";
  } else if (question === "folderStructure") {
    const correctAnswerType = answer as string;
    return `Choice ${correctAnswerType.toUpperCase()}`;
  }
  return "";
};

export default getFormatedTitle;
