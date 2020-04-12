const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");

const mgr = new Intern("David", 01, 999);
console.log(mgr.getRole());

// const intern = new Intern("Divah", 99, "Rutegrs");
// console.log(intern.getRole());
// console.log(intern.getSchool());
// console.log(intern.getId());

// function promptUser() {
//     return inquirer.prompt([{
//             type: "input",
//             name: "mgrName",
//             message: "First up, we're going to start with the manager. What is the manager's name?"
//         },
//         {
//             type: "input",
//             name: "projTitle",
//             message: "What is the title of your project?"
//         },
//         {
//             type: "input",
//             name: "projDesc",
//             message: "What is the description of your project?"
//         },
//         {
//             type: "input",
//             name: "projInstall",
//             message: "What are the installation instructions?"
//         },
//         {
//             type: "input",
//             name: "projUsage",
//             message: "What are the usage instructions?"
//         },
//         {
//             type: "list",
//             name: "license",
//             message: "What license would you like to use?",
//             choices: ["ISC", "MIT", "GNU GPLv3"]
//         },
//         {
//             type: "input",
//             name: "projTests",
//             message: "What are the testing instructions?"
//         },
//         {
//             type: "input",
//             name: "projQuestions",
//             message: "What are the questions for this project?"
//         },

//     ]);
// }