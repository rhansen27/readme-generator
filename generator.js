import inquirer from "inquirer";
import fs from "fs";

const questions = [
  {
    type: "input",
    name: "title",
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
  {
    type: "list",
    name: "license",
    message: "What license would you like to use for your project?",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None", "Other"],
    validate: (license) => {
      if (license) {
        return true;
      } else {
        console.log("Please select a valid license for your project");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project.",
    validate: (description) => {
      if (description) {
        return true;
      } else {
        console.log("Please provide a valid description of your project.");
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

init();
