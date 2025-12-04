// Class representing a Student
class Student {
    constructor(id, name, section, result) {
        this.id = id;
        this.name = name;
        this.section = section;
        this.result = result; // instance of Result
    }
}

// Class representing a Result
class Result {
    constructor(math, science, english) {
        this.math = math;
        this.science = science;
        this.english = english;
    }

    getTotal() {
        return this.math + this.science + this.english;
    }

    getPercentage() {
        return ((this.getTotal() / 300) * 100).toFixed(2);
    }
}

// Optional Section class (if needed later)
class Section {
    constructor(name) {
        this.name = name;
        this.students = [];
    }
}
