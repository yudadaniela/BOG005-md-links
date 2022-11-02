const { stats, statsAndValide, } = require("./statsFunction");
const { mdLinks } = require("./index");
const chalk = require("chalk");

const route = process.argv[2];
// console.log(route);
const argv = process.argv;
 console.log(argv)

const cli = (route, argv) => {
  if (route && argv.includes('--validate')) {
    console.log(chalk.bold.blue('VALIDATE TRUE'))
    //const unaPromesa = mdLinks(route, { validate: true })
    //unaPromesa.then(console.log)
    mdLinks(route, { validate: true }).then(console.log)
  }
  else if (route && argv[3] === undefined) {
    mdLinks(route, { validate: false })
  }
  else if (route && argv.includes('--stats')) {
    
    stats(mdLinks(route, { validate: true }))
  } else if (route && argv.includes('--stats') && argv.include('--validate')) {
    mdLinks(route, { validate: true }).then(linksArr =>  statsAndValide(linksArr))
   
  } else if (
    argv !== '--stats' &&
    argv !== '--validate' &&
    argv !== undefined
  ) {
    console.log(chalk.underline.bgRed("La opcion no es valida, por favor intenta con --validate o --stats"));
  }
};

cli(route, argv)