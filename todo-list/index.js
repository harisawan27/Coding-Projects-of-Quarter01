import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What do you want to add in your Todo list?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more tasks?",
            default: "true"
        }
    ]);
    todo.push(addTask.todo);
    condition = addTask.addMore;
}
console.log("Your todo list is:");
for (let i in todo) {
    console.log(`=> ${i}`);
}
