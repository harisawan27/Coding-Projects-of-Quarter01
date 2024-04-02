#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1527;
console.log("Welcome to Haris' ATM!");
console.log("=> Your pin is: 1527");
console.log("=> Your balance is: $10000\n");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin: ",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select the option",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash"],
        },
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Please enter the amount: $",
                type: "number",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log("Your remaining amount is: " + "$" + myBalance);
            console.log("Thanks! for using Haris' ATM");
        }
        else {
            console.log("Insufficient balance!");
        }
    }
    else if (operationAns.operation === "Fast Cash") {
        let option = await inquirer.prompt([
            {
                name: "amountOption",
                message: "Please select the amount: ",
                type: "list",
                choices: ["$500", "$1000", "$2000", "$5000"],
            },
        ]);
        if (option.amountOption === "$500") {
            myBalance -= 500;
            console.log("Your remaining amount is: " + "$" + myBalance);
            console.log("Thanks! for using Haris' ATM");
        }
        else if (option.amountOption === "$1000") {
            myBalance -= 1000;
            console.log("Your remaining amount is: " + "$" + myBalance);
            console.log("Thanks! for using Haris' ATM");
        }
        else if (option.amountOption === "$2000") {
            myBalance -= 2000;
            console.log("Your remaining amount is: " + "$" + myBalance);
            console.log("Thanks! for using Haris' ATM");
        }
        else if (option.amountOption === "$5000") {
            myBalance -= 5000;
            console.log("Your remaining amount is: " + "$" + myBalance);
            console.log("Thanks! for using Haris' ATM");
        }
        else {
            console.log("Insufficient balance!");
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log("Your balance is: " + "$" + myBalance);
    }
}
else {
    console.log("Incorrect pin code!");
}
