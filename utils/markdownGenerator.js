import fs from "fs";
import inquirer from "inquirer";

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
