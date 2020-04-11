class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.email = "";
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this;
    }
}


module.exports = Employee;