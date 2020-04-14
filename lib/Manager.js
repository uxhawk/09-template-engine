const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id);
        this.officeNumber = officeNumber;
        this.email = email;
        this.role = "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return this.role;
        //need to figure out how to return what type of class this obj is, needs to return manager
    }
}


module.exports = Manager;