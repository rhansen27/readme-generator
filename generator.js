import inquirer from "inquirer";
import fs from "fs";

const questions = [
  {
    type: input,
    name: title,
    message: "What is the title of your project?",
    validate: (title) => {
      if (title) {
        return true;
      } else {
        console.log("Please enter a valid title for your project");
        return false;
      }
    },
  },
];

function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
  });
}
