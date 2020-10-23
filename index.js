var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
  {
    type: "input",
    name: "project title",
    message: "What is the project title?"
  },
  {
    type: "input",
    name: "description",
    message: "Write a short description of your project:"
  },
  {
    type: "input",
    name: "installation instructions",
    message: "Provide the installation instructions for your project:"
  },
  {
    type: "input",
    name: "usage information",
    message: "Provide the usage information for your project:"
  },
  {
    type: "input",
    name: "contribution guidelines",
    message: "Provide the contribution guidelines for your project:"
  },
  {
    type: "input",
    name: "test instructions",
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
]).then(function(data) {

fs.writeFile("README.md", JSON.stringify(data, null, '\t'), function(err) {

  if (err) {
    return console.log(err);
  }

  console.log("Success!");

});
});