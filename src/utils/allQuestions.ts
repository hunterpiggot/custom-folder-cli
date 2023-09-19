const allQuestions = {
  typeScript: {
    type: "confirm",
    name: "typeScript",
    message: "Would you like to use TypeScript?",
  },
  redux: {
    type: "confirm",
    name: "redux",
    message: "Would you like to use Redux?",
  },
  tailwindcss: {
    type: "confirm",
    name: "tailwindcss",
    message: "Would you like to use Tailwind CSS?",
  },
  vite: {
    type: "confirm",
    name: "vite",
    message: "Would you like to use Vite?",
  },
  folderStructure: {
    type: "rawlist",
    name: "folderStructure",
    message: "What folder structure would you like?",
    choices: [
      {
        name: "Choice A",
        value: "a",
      },
      {
        name: "Choice B",
        value: "b",
      },
      {
        name: "Choice C",
        value: "c",
      },
    ],
  },
};

export default allQuestions;
