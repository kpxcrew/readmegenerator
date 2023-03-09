// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'github',
    message: 'What is your GitHub handle?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What email is best to reach you at?',
  },
  {
    type: 'input',
    name: 'title',
    message: "What is your project's name?",
  },
  {
    type: 'input',
    name: 'description',
    message: 'In a few words, describe your project',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What Licenses does your project need?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?',
    default: 'npm i',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',
    default: 'npm test',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How does the user use the repo?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can the user contribute to the repo?',
  },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function initiate() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("Success, your file is located in the dist directory");
    writeToFile("README.md", generateMarkdown({
      ...inquirerResponses
    }))
    
  })
}

// Function call to initialize app
initiate();
