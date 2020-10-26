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
    name: "credits",
    message: "List any collaborators with links to their GitHub profiles:"
  },
  {
    type: "input",
    name: "tests",
    message: "Provide the test instructions for your project:"
  },
  {
    type: "list",
    message: "What is your preferred method of communication?",
    name: "contact",
    choices: [
      "email",
      "phone",
      "telekinesis"
    ]
  }
]).then((answers) => {
  fs.writeFileSync("README.md", "# " + answers.projecttitle + '\n' + '\n');

  fs.appendFileSync("README.md", "## " + "Description" + '\n' + answers.description + '\n' + '\n');

  fs.appendFileSync("README.md", "## " + "Table of Contents" + '\n' + "[Installation] " + "(#-installation)" + '\n');
  fs.appendFileSync("README.md", "[Usage] " + "(#usage)" + '\n');
  fs.appendFileSync("README.md", "[Credits] " + "(#credits)" + '\n');
  fs.appendFileSync("README.md", "[Test Instructions] " + "(#test-instructions)" + '\n' + '\n');


  fs.appendFileSync("README.md", "## " + "Installation" + '\n' + answers.installation + '\n' + '\n');
  fs.appendFileSync("README.md", "## " + "Usage" + '\n' + answers.usage + '\n' + '\n');
  fs.appendFileSync("README.md", "## " + "Credits" + '\n' + answers.credits + '\n' + '\n');
  fs.appendFileSync("README.md", "## " + "Test Instructions" + '\n' + answers.tests);

});
// (function generateRM (data) {

// fs.writeFile("README.md", JSON.stringify(data), function(err) {
//   // ${data.projecttitle}

//   // if (err) {
//   //   return console.log(err);
//   // }

//   // console.log("Success!");


// });
// });