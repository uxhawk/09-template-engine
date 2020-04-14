const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const writeFileAsync = util.promisify(fs.writeFile);

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
            message: "What is the manager's name?",
            validate: validateName
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's employee ID?",
            validate: validateID
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?",
            validate: validateEmail
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?",
            validate: validateOffice
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
            message: "What is the Engineer's name?",
            validate: validateName
        },
        {
            type: "input",
            name: "id",
            message: "What is the Engineer's employee ID?",
            validate: validateID
        },
        {
            type: "input",
            name: "email",
            message: "What is the Engineer's email?",
            validate: validateEmail
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
            validate: validateName
        },
        {
            type: "input",
            name: "id",
            message: "What is the Intern's employee ID?",
            validate: validateID
        },
        {
            type: "input",
            name: "email",
            message: "What is the Intern's email?",
            validate: validateEmail
        },
        {
            type: "input",
            name: "school",
            message: "What university does the Intern attend?"
        },
    ]);
}

function validateID(id) {
    var reg = /^\d+$/;
    return reg.test(id) || "ID should be a number!";
}

function validateOffice(num) {
    var reg = /^\d+$/;
    return reg.test(num) || "Office number should be a number!";
}

function validateName(name) {
    var reg = /^\D+$/;
    return reg.test(name) || "Name cannot include numbers!";
}

function validateEmail(email) {
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // var reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/;
    return reg.test(email) || "Please enter a valid email address.";
}

function populateCards() {
    var cardCollection = '';
    team.forEach(employee => {
        if (employee instanceof Manager) {
            var card = `<div class="col-md-4">
            <div class="card mb-4">
            <div class="card-header bg-primary text-white">
                <h3>${employee.name}</h3>
                <h4 class="pb-0 mb-0"><span class="fas fa-mug-hot"></span> Manager</h4>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group">
                    <li class="list-group-item">Employee ID: ${employee.id}</li>
                    <li class="list-group-item">Email: ${employee.email}</li>
                    <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
                </ul>
            </div>
        </div>
        </div>`;
            cardCollection += card;
        } else if (employee instanceof Intern) {
            var card = `<div class="col-md-4">
            <div class="card mb-4">
            <div class="card-header bg-primary text-white">
                <h3>${employee.name}</h3>
                <h4 class="pb-0 mb-0"><span class="fas fa-user-graduate"></span> Intern</h4>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group">
                    <li class="list-group-item">Employee ID: ${employee.id}</li>
                    <li class="list-group-item">Email: ${employee.email}</li>
                    <li class="list-group-item">University: ${employee.school}</li>
                </ul>
            </div>
        </div>
        </div>`;
            cardCollection += card;
        } else if (employee instanceof Engineer) {
            var card = `<div class="col-md-4">
            <div class="card mb-4">
            <div class="card-header bg-primary text-white">
                <h3>${employee.name}</h3>
                <h4 class="pb-0 mb-0"><span class="fas fa-code"></span> Engineer</h4>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group">
                    <li class="list-group-item">Employee ID: ${employee.id}</li>
                    <li class="list-group-item">Email: ${employee.email}</li>
                    <li class="list-group-item">GitHub: <a href="${employee.githubURL}" target="blank">${employee.github}</a></li>
                </ul>
            </div>
        </div>
        </div>`;
            cardCollection += card;
        }
    });
    return cardCollection;
}

function generateHTML(cards) {
    return `<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
    <title>My Team Profile</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid text-center bg-dark text-white">
        <div class="container">
            <h1 class="display-4">My Project Team</h1>
            <p class="lead">100% Winners. Don't try to poach any of my talent.</p>
        </div>
    </div>
    <div class="row">
        <div class="col-md-10 offset-md-1">
            <div class="row">
                ${cards}
            </div>
        </div>
    </div>
    <!-- Optional JavaScript -->
    <!-- Popper.js, then Bootstrap JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
    </script>
</body>
</html>`
}

async function init() {

    try {
        const managerDetails = await promptManager();
        const manager = new Manager(managerDetails.name, managerDetails.id, managerDetails.email, managerDetails.officeNumber);

        team.push(manager);

        var employees = await promptEmployees();

        while (employees.type !== "I've finished adding employees.") {
            if (employees.type === "Engineer") {
                var engineerDetails = await promptEngineer();
                var engineer = new Engineer(engineerDetails.name, engineerDetails.id, engineerDetails.email, engineerDetails.github);
                var githubURL = await axios.get(`https://api.github.com/users/${engineer.github}`);
                engineer.githubURL = githubURL.data.html_url
                team.push(engineer);
                employees = await promptEmployees();
            } else {
                var internDetails = await promptIntern();
                var intern = new Intern(internDetails.name, internDetails.id, internDetails.email, internDetails.school)
                team.push(intern);
                employees = await promptEmployees();
            }
        }

        const allEmployees = populateCards();
        const html = generateHTML(allEmployees);

        writeFileAsync("./output/team.html", html).then(function() {
            console.log("Successfully wrote to team.html");
        });
    } catch (err) {
        console.log(err);
    }
}

init();