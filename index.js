const inquirer = require("inquirer");
const fs = require('fs');

inquirer.prompt([
  {
    type: "input",
    name: "projecttitle",
    message: "What is the project title?"
  },
  {
    type: "input",
    name: "description",
    message: "Write a short description of your project:"
  },
  {
    type: "input",
    name: "installation",
    message: "Provide the installation instructions for your project:"
  },
  {
    type: "input",
    name: "usage",
    message: "Provide the usage information for your project:"
  },
  {
    type: "input",
    name: "contributionguidelines",
    message: "List any collaborators with links to their GitHub profiles:"
  },
  {
    type: "input",
    name: "tests",
    message: "Provide the test instructions for your project:"
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  },
  {
    type: "list",
    name: "license",
    message: "Select a license:",
    choices: [
      "MIT",
      "Apache",
      "ISC",
      "None"
    ]
  }
]).then((answers) => {

    if (answers.license == "MIT") {
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (answers.license == "Apache") {
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (answers.license == "ISC") {
      licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    } else {
      licenseBadge = ""
    }
  
  fs.writeFileSync("README.md", "# " + answers.projecttitle + '\n' + '\n');
  fs.appendFileSync("README.md", licenseBadge + '\n' + '\n');

  fs.appendFileSync("README.md", "## " + "Description" + '\n' + answers.description + '\n' + '\n');

  fs.appendFileSync("README.md", "## " + "Table of Contents" + '\n' + "[Installation]" + "(#installation)" + '\n' + '\n');
  fs.appendFileSync("README.md", "* [Usage]" + "(#usage)" + '\n' + '\n');
  fs.appendFileSync("README.md", "* [Contribution Guidelines]" + "(#contribution-guidelines)" + '\n' + '\n');
  fs.appendFileSync("README.md", "* [Test Instructions]" + "(#test-instructions)" + '\n' + '\n');
  fs.appendFileSync("README.md", "* [Questions]" + "(#questions)" + '\n' + '\n');

  fs.appendFileSync("README.md", "## " + "Installation" + '\n' + answers.installation + '\n' + '\n');
  fs.appendFileSync("README.md", "## " + "Usage" + '\n' + answers.usage + '\n' + '\n');
  fs.appendFileSync("README.md", "## " + "Contribution Guidelines" + '\n' + answers.contributionguidelines + '\n' + '\n');
  fs.appendFileSync("README.md", "## " + "Test Instructions" + '\n' + answers.tests + '\n' + '\n');
  fs.appendFileSync("README.md", "## " + "License" + '\n' + "This application is covered under the " + answers.license + " license." + '\n' + '\n');
  fs.appendFileSync("README.md", "## " + "Questions" + '\n' + "My GitHub: " + ("https://github.com/" + answers.github) + '\n' + '\n');
  fs.appendFileSync("README.md", "If you have any further questions, you can reach me at: " + answers.email);
});