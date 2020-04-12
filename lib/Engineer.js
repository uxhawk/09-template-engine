const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, gitHub) {
        super(name, id);
        this.gitHub = gitHub;
        this.role = "Engineer";
    }

    getRole() {
        return this;
        //need to figure out how to return what type of class this obj is
    }

    getGitHub() {
        return this.gitHub;
    }
}


module.exports = Engineer;