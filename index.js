const inquirer = require("inquirer");
const fs = require("fs");

function promptUser() {
    return inquirer.prompt([{
            type: "input",
            name: "gitHub",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "projTitle",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "projDesc",
            message: "What is the description of your project?"
        },
        {
            type: "input",
            name: "projInstall",
            message: "What are the installation instructions?"
        },
        {
            type: "input",
            name: "projUsage",
            message: "What are the usage instructions?"
        },
        {
            type: "list",
            name: "license",
            message: "What license would you like to use?",
            choices: ["ISC", "MIT", "GNU GPLv3"]
        },
        {
            type: "input",
            name: "projTests",
            message: "What are the testing instructions?"
        },
        {
            type: "input",
            name: "projQuestions",
            message: "What are the questions for this project?"
        },

    ]);
}