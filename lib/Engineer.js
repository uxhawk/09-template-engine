const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.githubURL = "";
        this.role = "Engineer";
    }

    getRole() {
        return this.role;
        //need to figure out how to return what type of class this obj is
    }

    getGithub() {
        return this.github;
    }
}


module.exports = Engineer;