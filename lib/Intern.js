const Employee = require("./Employee");



class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
    }

    getRole() {
        return this.role;
        //need to figure out how to return what type of class this obj is
    }

    getSchool() {
        return this.school;
    }
}


module.exports = Intern;