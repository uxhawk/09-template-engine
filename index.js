const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const team = [];

function promptManager() {
    console.log(`\nWelcome to the team generator.\nFirst up, we're going to start with the manager.\n${`-`.repeat(60)}\n`);
    return inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's employee ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office (phone) number?"
        },
    ]);
}

function promptEmployees() {
    return inquirer.prompt([{
        type: "list",
        name: "type",
        message: "What other employees do you want to add?",
        choices: ["Engineer", "Intern", "I've finished adding employees."]
    }]);
}

function promptEngineer() {
    console.log(`\nLet's add an engineer to your team.\n${`-`.repeat(60)}\n`);
    return inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is the Engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the Engineer's employee ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the Engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the Engineer's GitHub username?"
        },
    ]);
}

function promptIntern() {
    console.log(`\nLet's add an intern to your team.\n${`-`.repeat(60)}\n`);
    return inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is the Intern's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the Intern's employee ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the Intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What university does the Intern attend?"
        },
    ]);
}

async function init() {

    try {
        const managerDetails = await promptManager();
        const manager = new Manager(managerDetails.name, managerDetails.id, managerDetails.email, managerDetails.officeNumber);

        team.push(manager);
        console.log(team[team.length - 1].role);

        var employees = await promptEmployees();

        while (employees.type !== "I've finished adding employees.") {
            if (employees.type === "Engineer") {
                var engineerDetails = await promptEngineer();
                var engineer = new Engineer(engineerDetails.name, engineerDetails.id, engineerDetails.email, engineerDetails.github);
                team.push(engineer);
                console.log(team[team.length - 1].role);
                employees = await promptEmployees();

            } else {
                var internDetails = await promptIntern();
                var intern = new Intern(internDetails.name, internDetails.id, internDetails.email, internDetails.school)
                team.push(intern);
                console.log(team[team.length - 1].role);
                employees = await promptEmployees();
            }
        }


        console.log("Should be done now");
        //now time to write to loop through team array and write to file

        //will need to get the data on the github user's 
        // const gitData = await axios.get(`https://api.github.com/users/${answers.gitHub}/events/public`);

        // await writeFileAsync("README2.md", readMe);

        // console.log("Successfully wrote to readMe.md");
    } catch (err) {
        console.log(err);
    }
}

init();