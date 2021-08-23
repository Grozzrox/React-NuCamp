class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

const data = [
    {
        id: 0,
        name: "Andrew Grozdanov",
        email: "Grozzy09@gmail.com",
        location: "New Kent, Virginia, USA"
    },
    {
        id: 1,
        name: "Erica Grozdanov",
        email: "Hannoneri@gmail.com",
        location: "New Kent, Virginia, USA"
    },
    {
        id: 2,
        name: "Mike Dougherty",
        email: "mike.dougherty@gmail.com",
        location: "Mechanicsville, Virginia, USA"
    }

];

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

const nucamp = new Bootcamp("NuCamp", "Full Stack Web Development", ["neo@matrix.com", "biden@whitehouse.gov", "mike.dougherty@gmail.com"]);
