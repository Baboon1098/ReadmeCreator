
// TODO: Create an array of questions for user input
const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'Enter the project title:'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter the project description:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:'
  },
  {
    type: 'input',
    name: 'Contributing',
    message: 'Enter contribution guidelines:'
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:'
  },
  {
    type: 'input',
    name: 'deployedWebpage',
    message: 'Enter the URL of the deployed webpage:'
  }
];

// TODO: Create a function to write README file
const fs = require('fs');

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README file generated successfully!');
    }
  });
}


async function init() {
    try {
      const answers = await inquirer.prompt(questions);
      // Generate README content using answers
      const readmeContent = generateReadmeContent(answers);
      writeToFile('README.md', readmeContent);
    } catch (error) {
      console.error(error);
    }
  }

function generateReadmeContent(answers) {
    const content = `
    # ${answers.projectTitle}
  
    ## Description
    ${answers.description}
  
    ## Usage
    ${answers.usage}
  
    ## License
    // Add license badge and notice here
  
    ## Contributing
    ${answers.contributing}
  
   ## Deployment
    GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
    Deployed Webpage: [${answers.deployedWebpage}]
    `;
  
    return content;
  }
  
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README file generated successfully!');
      }
    });
  }
  
  init();