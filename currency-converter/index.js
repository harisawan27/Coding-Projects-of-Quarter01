import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.94,
    GBP: 0.81,
    INR: 83.37,
    PKR: 277.69
};
console.log("*** Welcome to Currency Converter ***");
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "From Currency:",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "To Currency:",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter Your Amount:",
        type: "number"
    }
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log("Your Converted Amount is: " + convertedAmount);
