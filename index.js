// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
  type: 'input',
  name: 'username',
  message: 'What is your GitHub username?',
},
{
  type: 'input',
  name: 'email',
  message: 'What is your email address?',
},
{
  type: 'input',
  name: 'projName',
  message: "What is your project's name?",
},
{
  type: 'input',
  name: 'projDes',
  message: 'Please provide a short description of your project.',
},
{
  type: 'list',
  name: 'license',
  message: 'What kind of license should your project have?',
  choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"]
},
{
  type: 'input',
  name: 'cmdInstall',
  message: 'What command should be run to install dependencies?',
  default: "npm i"
},
{
  type: 'input',
  name: 'cmdTest',
  message: 'What command should be run to run tests?',
  default: "npm test"
},
{
  type: 'input',
  name: 'infoUse',
  message: 'What does the user need to know about using the repo?',
},
{
  type: 'input',
  name: 'infoCont',
  message: 'What does the user need to know about contributing to the repo?',
},

];

inquirer.prompt(questions).then((data) => {
  const username = JSON.stringify(data.username);
  const email = JSON.stringify(data.email);
  const projName = JSON.stringify(data.projName);
  const projDes = JSON.stringify(data.projDes);
  const license = JSON.stringify(data.license);
  const cmdInstall = JSON.stringify(data.cmdInstall);
  const cmdTest = JSON.stringify(data.cmdTest);
  const infoUse = JSON.stringify(data.infoUse);
  const infoCont = JSON.stringify(data.infoCont);

  const res = `Hi! My name is ${username}\n## Description`

  console.log(res);
  writeToFile(res);
});

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile("README.md", data, (err) =>
    err ? console.error(err) : console.log('Success!')
  );

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
