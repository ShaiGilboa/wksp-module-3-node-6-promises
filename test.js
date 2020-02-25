const inquirer = require('inquirer');
const reqRes = require('request-promise');

const questions = [
    {
        type: 'input',
        name: 'first',
        message: 'Name Please?' 
    }
];

inquirer.prompt(questions)
    .then(answers => {
        console.log(answers);
    });