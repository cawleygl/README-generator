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
  default: 'npm i'
},
{
  type: 'input',
  name: 'cmdTest',
  message: 'What command should be run to run tests?',
  default: 'npm test'
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

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile('README.md', data, (err) =>
    err ? console.error(err) : console.log('Success!')
  );

}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {

  switch (data.license) {
    case "MIT":
      var licenseBadge = "![GitHub License](https://img.shields.io/badge/License-MIT-yellow.svg)"
      var license = "This project is licensed under the MIT license."
      break;
    case "APACHE 2.0":
      var licenseBadge = "![GitHub License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
      var license = "This project is licensed under the APACHE 2.0 license."
      break;
    case "GPL 3.0":
      var licenseBadge = "![GitHub License](https://img.shields.io/badge/License-GPLv3-blue.svg)"
      var license = "This project is licensed under the GPL 3.0 license."
      break;
    case "BSD 3":
      var licenseBadge = "![GitHub License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)"
      var license = "This project is licensed under the BSD 3 license."
      break;
    default:
      var licenseBadge = ""
      var license = "Please inquire for further licencing information on this project."
      break;
  }

  const res = `# ${data.projName}\n${licenseBadge}\n\n## Description\n${data.projDes}\n\n## Table of Contents\n* [Installation](#installation)\n\n* [Usage](#usage)\n\n * [License](#license)\n\n * [Contributing](#contributing)\n\n* [Tests](#tests)\n\n* [Questions](#questions)\n\n## Installation\nTo install necessary dependencies, run the following command: ${data.cmdInstall}\n\n## Usage\n${data.infoUse}\n\n## License\n${license}\n\n## Contributing\n${data.infoCont}\n\n## Tests\nTo run tests, run the following command: ${data.cmdTest}\n\n## Questions\nIf you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username}).\n`

  writeToFile(res);

  }).catch((err) => console.error(err));

}

// Function call to initialize app
init();
