const inquirer = require('inquirer');
const fs = require ('fs')
const licenseModule = require('./generateMarkdown');

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
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache', 'GNU', 'None']
  },
  {
    type: 'input',
    name: 'contributing', 
    message: 'Enter contribution guidelines:'
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username:'
  },
  {
    type: 'input',
    name: 'deployedWebpage',
    message: 'Enter the URL of the deployed webpage:'
  }
];

async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const readmeContent = generateReadmeContent(answers);
    writeToFile('README.md', readmeContent);
  } catch (error) {
    console.error(error);
  }
}

function generateReadmeContent(answers) {
  const licenseBadge = licenseModule.renderLicenseBadge(answers.license);
  const licenseLink = licenseModule.renderLicenseLink(answers.license);
  const licenseSection = licenseModule.renderLicenseSection(answers.license)

  const content = `
# ${answers.projectTitle}

## Description
${answers.description}

## Usage
${answers.usage}

## License
${licenseBadge}
${licenseSection}
${licenseLink}

## Contributing
${answers.contributing} // Changed to lowercase 'contributing'

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
