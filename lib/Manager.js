const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, officeNumber) {
        super(name, id);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return this;
        //need to figure out how to return what type of class this obj is, needs to return manager
    }
}


module.exports = Manager;