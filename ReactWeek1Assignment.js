class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students=[]) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(studentToRegister) {
        const currentStudent = this.students.filter(student => student === studentToRegister);
        
        // Check if currentStudent array is empty
        if (!currentStudent.length) {
            this.students.push(studentToRegister);
            console.log(`Registering ${studentToRegister} to the bootcamp ${this.level}.`);
        } else {
            console.log(`${studentToRegister} is already registered in this bootcamp.`);
        }
        return this.students;
    }
}