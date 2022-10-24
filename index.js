const { validateConvertPath, mdSearcher } = require("./src/functionality");
const { readFileMd } = require("./read");
// function mdLinks(path, options) {
//     if (!path){  //No existe el path
//         console.log('NO Existe el path');
//     }else{

//     }

// }

let route = process.argv[2];
//console.log(route);

const validatePath = validateConvertPath(route);
//console. log(mdSearcher(validatePath));
readFileMd(mdSearcher(validatePath)).then((res) => {
  console.log("xyz");
});
