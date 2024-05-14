#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// classes player & opponent
class Player {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    healthDecrease() {
        let health = this.health - 25;
        this.health = health;
    }
    healthIncrease() {
        this.health = 100;
    }
}
class Enemy {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    healthDecrease() {
        let health = this.health - 25;
        this.health = health;
    }
}
console.log(chalk.bold.italic.yellow("*** Welcome To Adventure Game ***"));
// player name and opponent select
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Enter Your Name: ",
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select Your Enemy",
    choices: ["Skeleton", "Assassin", "Zombie"],
});
//Gather data
let p1 = new Player(player.name);
let e1 = new Enemy(opponent.select);
do {
    //Skeleton
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select Your Move:",
            choices: ["Attack!", "Energy Drink", "Run From Enemy"],
        });
        if (ask.opt == "Attack!") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.healthDecrease();
                console.log(chalk.bold.red(`${p1.name} Health is ${p1.health}`));
                console.log(chalk.bold.green(`${e1.name} Health is ${e1.health}`));
                if (p1.health <= 0) {
                    console.log(chalk.bold.italic.red("You Loose, Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                e1.healthDecrease();
                console.log(chalk.bold.red(`${e1.name} Health is ${e1.health}`));
                console.log(chalk.bold.green(`${p1.name} Health is ${p1.health}`));
                if (e1.health <= 0) {
                    console.log(chalk.bold.green.italic("You Win!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Energy Drink") {
            p1.healthIncrease();
            console.log(chalk.bold.italic.green(`You Get Energy Drink, Your Health is ${p1.health}`));
        }
        if (ask.opt == "Run From Enemy") {
            console.log(chalk.bold.red.italic("You Loose, Better Luck Next Time"));
            process.exit();
        }
    }
    // Assassin
    if (opponent.select == "Assassin") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select Your Move",
            choices: ["Attack!", "Drink Portion", "Run From Enemy"],
        });
        if (ask.opt == "Attack!") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.healthDecrease();
                console.log(chalk.bold.red(`${p1.name}'s Health is ${p1.health}`));
                console.log(chalk.bold.green(`${e1.name}'s Health is ${e1.health}`));
                if (p1.health <= 0) {
                    console.log(chalk.bold.italic.red("You Loose, Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                e1.healthDecrease();
                console.log(chalk.bold.red(`${e1.name}'s Health is ${e1.health}`));
                console.log(chalk.bold.green(`${p1.name}'s Health is ${p1.health}`));
                if (e1.health <= 0) {
                    console.log(chalk.bold.green.italic("You Win!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Energy Drink") {
            p1.healthIncrease();
            console.log(chalk.bold.italic.green(`You Get Energy Drink, Your Health is ${p1.health}`));
        }
        if (ask.opt == "Run From Enemy") {
            console.log(chalk.bold.red.italic("You Loose, Better Luck Next Time"));
            process.exit();
        }
    }
    //Zombie
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select Your Opponent",
            choices: ["Attack!", "Drink Portion", "Run From Enemy"],
        });
        if (ask.opt == "Attack!") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.healthDecrease();
                console.log(chalk.bold.red(`${p1.name}'s Health is ${p1.health}`));
                console.log(chalk.bold.green(`${e1.name}'s Health is ${e1.health}`));
                if (p1.health <= 0) {
                    console.log(chalk.bold.italic.red("You Loose, Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                e1.healthDecrease();
                console.log(chalk.bold.red(`${e1.name}'s Health is ${e1.health}`));
                console.log(chalk.bold.green(`${p1.name}'s Health is ${p1.health}`));
                if (e1.health <= 0) {
                    console.log(chalk.bold.green.italic("You Win!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Energy Drink") {
            p1.healthIncrease();
            console.log(chalk.bold.italic.green(`You Get Energy Drink, Your Health is ${p1.health}`));
        }
        if (ask.opt == "Run From Enemy") {
            console.log(chalk.bold.red.italic("You Loose, Better Luck Next Time"));
            process.exit();
        }
    }
} while (true);
