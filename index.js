const { validateConvertPath, mdSearcher } = require("./src/pathFunctionality");
const { readFileMd, linkStatus } = require("./read");
const chalk = require("chalk");

let route = process.argv[2];
// const option = { validate: true};

const mdLinks= (route, option) => (
  new Promise((resolve, reject) => {
    
      const validatePath = validateConvertPath(route);
      const searcherMd = mdSearcher(validatePath);
      if (option.validate === true) {
        // console.log('true');
        readFileMd(searcherMd)
          .then((res) => linkStatus(res))
          .then((res) => resolve(res));
      } else {
        readFileMd(searcherMd).then((res) => resolve(res));
      }
    
  })
  
)

// mdLinks(route, { validate: true })
module.exports = {mdLinks};

// let route = process.argv[2];
// //console.log(route);

// const validatePath = validateConvertPath(route);
// console.log(validatePath);
// const searcherMd = mdSearcher(validatePath);
// console. log(mdSearcher(validatePath));
//readFileMd(searcherMd).then(resultadoFinal => console.log(`Obtenido el resultado final: ${resultadoFinal}`));
// console.log(readFileMd(searcherMd));
// Promise.all(readFileMd(searcherMd)).then((result) =>
//   console.log("result", result.flat())
// );

//imprtant
// readFileMd(searcherMd).then((res) => console.log("sdad", res));

//con opción validate true

//const readFile = readFileMd(searcherMd)
//console.log(readFileMd(searcherMd));
//console.log(linkStatus(readFile));

// readFileMd(searcherMd)
//   .then((res) => linkStatus(res))
//   .then((res) => console.log("lksajldjaldjakljdlaj", res));
