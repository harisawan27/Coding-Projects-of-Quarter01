import inquirer from 'inquirer';
class Student {
    static nextId = 10000;
    studentId;
    name;
    courses;
    balance;
    constructor(name) {
        this.studentId = Student.nextId++;
        this.name = name;
        this.courses = [],
            this.balance = 5000;
    }
    coursesEnroll(course) {
        this.courses.push(course);
    }
    balanceView() {
        console.log(`Balance for ${this.name} is: PKR.${this.balance}`);
    }
    payFees(amount) {
        this.balance -= amount;
        console.log(`Fees PKR.${amount} is succesfully paid for ${this.name}`);
        console.log(`Remaining balance: PKR.${this.balance}`);
    }
    studentStatus() {
        console.log(`Student ID: ${this.studentId}`);
        console.log(`Student Name: ${this.name}`);
        console.log(`Cousres: ${this.courses}`);
        console.log(`Balance: PKR.${this.balance}`);
    }
}
class Student_manager {
    students;
    constructor() {
        this.students = [];
    }
    addStudent(name) {
        let student = new Student(name);
        this.students.push(student);
        console.log(`Student: ${name} added successfully. Student ID: ${student.studentId}`);
    }
    enrollStudent(student_id, courses) {
        let std_find = this.find_student(student_id);
        if (std_find) {
            std_find.coursesEnroll(courses);
            console.log(`${Student.name} enrolled in ${courses} successfully`);
        }
    }
    view_student_balance(student_id) {
        let std_find = this.find_student(student_id);
        if (std_find) {
            std_find.balanceView();
        }
        else {
            console.log("Student not found. Please enter a correct student ID");
        }
    }
    pay_student_fees(student_id, amount) {
        let std_find = this.find_student(student_id);
        if (std_find) {
            std_find.payFees(amount);
        }
        else {
            console.log("Student not found. Please enter a correct student ID");
        }
    }
    show_student_status(student_id) {
        let std_find = this.find_student(student_id);
        if (std_find) {
            std_find.studentStatus();
        }
    }
    find_student(student_id) {
        return this.students.find(std => std.studentId === student_id);
    }
}
async function main() {
    console.log("Welcome to 'Muhammad Haris Awan' - Student Management System");
    console.log("-".repeat(60));
    let studentManager = new Student_manager();
    while (true) {
        let choice = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option",
                choices: [
                    "Add Student",
                    "Enroll Student",
                    "View Student Balance",
                    "Pay Fees",
                    "Show Status",
                    "Exit"
                ]
            }
        ]);
        switch (choice.choice) {
            case "Add Student":
                let name_input = await inquirer.prompt([
                    {
                        name: "name",
                        type: "input",
                        message: "Enter a Student Name: "
                    }
                ]);
                studentManager.addStudent(name_input.name);
                break;
            case "Enroll Student":
                let enroll_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a Student ID: "
                    },
                    {
                        name: "course",
                        type: "list",
                        message: " Select a Course : ",
                        choices: ["1) Artificial Intelligence", "2) Web 3.0", "3) Metaverse"]
                    }
                ]);
                studentManager.enrollStudent(enroll_input.student_id, enroll_input.course);
                break;
            case "View Student Balance":
                let balance_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a Student ID: "
                    }
                ]);
                studentManager.view_student_balance(balance_input.student_id);
                break;
            case "Pay Fees":
                let fees_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a Student ID: "
                    },
                    {
                        name: "amount",
                        type: "number",
                        message: "Enter the amount to pay: "
                    }
                ]);
                studentManager.pay_student_fees(fees_input.student_id, fees_input.amount);
                break;
            case "Show Status":
                let status_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a Student ID: "
                    }
                ]);
                studentManager.show_student_status(status_input.student_id);
                break;
            case "Exit":
                console.log("Exited");
                process.exit();
        }
    }
}
main();
