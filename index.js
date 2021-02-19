// Requirer inquirer
const inquirer = require("inquirer");
const fs = require("fs"); 
// Generate File 
const generate = require("./assets/generate.js");
// Array for Questions
const questions = [
   //Project Name
    {
    type: "input",
    message: "What is the tittle of you Project?",
    name: "Title",

},
// Project Description
{
    type: "input",
    message: "Give a description of your project?",
    name: "Description",
},
// Installation Steps
{
    type: "input",
    message: "Provide Installation steps to install your project",
    name: "Installation",
},
// Usage Instructions
{
    type: "input",
    message: "Provide instruction for usage",
    name: "Instructions",
},
// License List to choose
{
    type: "list",
    message: "Select (any) license for ReadMe",
    name: "License",
    choices: ["Microsoft Public License", "MIT", "GNU General Public License v3.0", "Boost Software License 1.0"],
},
// Guidelines for project constribution 
{
    type: "input",
    message:"Provide guidelines to constribute to this project",
    name: "Constribution"
},
// Test Examples
{
    type: "input",
    message: "Provide examples to test application",
    name: "Test",
},
// GitHub account
{
    type: "input",
    message: "Provide GitHub username",
    name: "Github",
},
// Email Account
{
    type: "input",
    message: "Provide Email address",
    name: "Email",
},
];
// Function to create ReadMe inside an example file
function writeToFile(fileName, data) {

fs.writeFile("./demo/"+fileName, data, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log ("Successfully wrote: " + fileName);
  })
}
  
  
  
  
  // Function for initiation
  function init() {
    inquirer.prompt(questions)
    .then(function(data) {
      writeToFile("DemoReadMe.md", generate(data));
    })
  }
  
  

  init();