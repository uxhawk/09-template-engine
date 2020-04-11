const Employee = require("./Employee");



class Intern extends Employee {
    constructor(school) {
        super(name, id);
        this.school = school;
    }

    getRole() {
        return this;
        //need to figure out how to return what type of class this obj is
    }

    getSchool() {
        return this.school;
    }
}


module.exports = Intern;