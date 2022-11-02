class Person {
    constructor(name) {
        this.name = name;
    }
    sayMyname() {
        return `Hello, My name is ${this.name} :D`
    }
}

module.exports = {
    Person,
};