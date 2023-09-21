const getFormatedTitle = (question, answer) => {
    if (typeof answer === "boolean") {
        if (answer) {
            return "Yes";
        }
        return "No";
    }
    else if (question === "folderStructure") {
        const correctAnswerType = answer;
        return `Choice ${correctAnswerType.toUpperCase()}`;
    }
    return "";
};
export default getFormatedTitle;
