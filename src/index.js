var file = require('file-system');
var fs = require('fs');
 
console.log(file.readFile === fs.readFile )// true
//import { chalk } from 'chalk';
// const error = chalk.bold.red;
// const warning = chalk.hex('#FFA500'); // Orange color

// console.log(error('Error!'));
// console.log(warning('Warning!'));
//console.log('hola');


let nombre=process.argv.slice(2);
console.log(nombre);
