//required imports
import fs from "fs";
import inquirer from "inquirer";

// function to generate the license badges for the readme file
function getLicenseBadge(license) {
  let badge = "";
  switch (license) {
    case "MIT":
      badge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Apache 2.0":
      badge =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GPL 3.0":
      badge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "BSD 3":
      badge =
        "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "None":
      badge = "";
      break;
    case "Other":
      badge = "";
      break;
    default:
      badge = "";
      break;
  }

  return badge;
}

// function to generate the link for the license of the readme file
function getLicenseLink(license) {
  let link = "";
  switch (license) {
    case "MIT":
      link = "https://opensource.org/licenses/MIT";
      break;
    case "Apache 2.0":
      link = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "GPL 3.0":
      link = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "BSD 3":
      link = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "None":
      link = "";
      break;
    case "Other":
      link = "";
      break;
    default:
      link = "";
      break;
  }
  return link;
}

// function to generate the license section of the readme file
function getLicenseSection(license) {
  let licenseSection = "";
  if (license === "None") {
    licenseSection = "This project is not licensed.";
  } else if (license === "Other") {
    licenseSection = `This project is licensed under a license not listed`;
  } else {
    licenseSection = `This project is licensed under ${license}.`;
  }
  return licenseSection;
}

// function that generates the final readme.md file
function generateMarkdown(answer) {
  const readMeContents = `
  # ${answer.title}
    
  ## ${getLicenseSection(answer.license)} ${getLicenseBadge(answer.license)}
  ### ${getLicenseLink(answer.license)}
    
  ## Table of Contents:
  ### *[Installation](#installation)
  ### *[Usage](#usage)
  ### *[License](#license)
  ### *[Contributing](#contributing)
  ### *[Tests](#tests)
  ### *[Questions](#questions)
    
  ## Description
  ### ${answer.description}
    
  ## Installation
  ### ${answer.installation}
    
  ## Usage
  ### ${answer.use}
    
  ## License
  ### ${getLicenseSection(answer.license)} ${getLicenseBadge(answer.license)}
    
  ## Contributing
  ### ${answer.contribution}
    
  ## Tests
  ### ${answer.testing}
    
  ## Questions
  ### If you have any questions, please contact me at ${answer.email}
    
  ### Visit my GitHub profile: [${answer.username}](https://github.com/${
    answer.username
  })
    `;

  return readMeContents;
}

// exports the file to be used in generator.js
export default generateMarkdown;
