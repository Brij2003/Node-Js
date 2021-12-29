import chalk from 'chalk';
import validator from 'validator';

var res = validator.isEmail("vaghanibrij222@gmail.com")
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));