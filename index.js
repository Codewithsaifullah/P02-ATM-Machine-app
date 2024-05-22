import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userID",
        message: "Please enter your user ID:"
    },
    {
        type: "number",
        name: "userPin",
        message: "Please enter your user Pin:"
    },
    {
        type: "list",
        name: "acountType",
        message: "Please select your acount type:",
        choices: ["Current", "Saving"]
    },
    {
        type: "list",
        name: "transitionType",
        message: "Please select your Transition type:",
        choices: ["Fast Cash", "Withdraw"],
        when(answers) {
            return answers.acountType;
        }
    },
    {
        type: "list",
        name: "amount",
        message: "Please select your amount:",
        choices: [1000, 2000, 10000, 20000, 100000],
        when(answers) {
            return answers.transitionType == "Fast Cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Please Enter your amount:",
        when(answers) {
            return answers.transitionType == "Withdraw";
        }
    }
]);
if (answers.userID && answers.userPin) {
    const balance = Math.floor(Math.random() * 1000000);
    console.log(`Your account balance is ${balance}`);
    const enteredAmount = answers.amount;
    console.log(`Your entered amount is ${enteredAmount}`);
    if (balance > enteredAmount) {
        const remaingAmount = balance - enteredAmount;
        console.log(`Your remaing balance is ${remaingAmount}`);
    }
    else {
        console.log(`Your entered amount is greater than your account balance \n Insficient balance`);
    }
}
