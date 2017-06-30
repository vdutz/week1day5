var chalk = require("chalk");

var message = chalk.bold(chalk.bgCyan("Hello ")) + chalk.strikethrough(chalk.yellow("World"));
console.log(message);