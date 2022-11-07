const { stats, statsAndValide, } = require("./statsFunction");
const { mdLinks } = require("./index");
const chalk = require("chalk");
var figlet = require('figlet');

const route = process.argv[2];
// console.log(route);
const argv = process.argv;
//  console.log(argv)

const cli = (route, argv) => {
 setTimeout(() => {
  if(!route){
    console.log(chalk.underline.bgRed("Por favor ingrese el path"));
  }
   else if  (route && argv.includes('--stats') && argv.includes('--validate')) {
      console.log(chalk.bold.blue('VALIDATE TRUE AND STATS TRUE'))
      mdLinks(route, { validate: true }).then(linksArr =>  statsAndValide(linksArr))
    }
    else if (route && argv[3] === undefined) {
      console.log(chalk.bold.blue('VALIDATE FALSE'))
      mdLinks(route, { validate: false })
      .then((res) => res.forEach((link)=> 
      console.log(chalk.green.bold.underline(link.href),chalk.white.bold( link.text), chalk.magenta.bold.italic( link.file))))
    }else if (route && argv.includes('--stats')) { 
      console.log(chalk.bold.blue('STATS TRUE'))
      mdLinks(route, { validate: true }).then(linksArr =>  stats(linksArr))
    } else if (route && argv.includes('--validate')) {
      console.log(chalk.bold.blue('VALIDATE TRUE'))
      mdLinks(route, { validate: true })
      .then((res) => res.forEach((link)=> 
        console.log(chalk.green.bold.underline(link.href),chalk.white.bold(link.text), chalk.magenta.bold.italic( link.file), chalk.bgGray.bold('Status > ' +link.status, link.OK))));
    } else if (
      argv !== '--stats' &&
      argv !== '--validate' &&
      argv !== undefined
    ) {
      console.log(chalk.underline.bgRed("La opcion no es valida, por favor intenta con --validate o --stats"));
    }
  
 }, 100); 

  figlet('MdLinks-Yuda',{
    font: 'Standard',
    width: 80,
    whitespaceBreak: true
    
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.bold.red(data))
});

};

cli(route, argv)