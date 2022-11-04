var file = require("file-system");
var fs = require("fs");
const path = require("path");
const chalk = require("chalk");

function validateConvertPath(route) {
  const pathValide = path.isAbsolute(route);
  if (pathValide === false) {
    const pathConvert = path.resolve(route);
    //  console.log(pathConvert);
    return pathConvert;
  }
    // console.log(route);
    return route;
}


const mdSearcher = (route) => {
  let mdArray = [];
  if(fs.statSync(route).isFile() && path.extname(route) !== '.md'){
    console.log(chalk.underline.bgRed('Este archivo no es .md'));
  } else if (fs.statSync(route).isDirectory()===true) { 

    fs.readdirSync(route).forEach(file => {
          let newRoute = path.join(route, file);
          mdArray = mdArray.concat(mdSearcher(newRoute)); 
      });
  } else{ 
      if (fs.statSync(route).isFile()&& path.extname(route) === '.md') {
        mdArray.push(route);
      }
  }
  return mdArray;
}



module.exports = { validateConvertPath, mdSearcher};

//console.log(file.readFile === fs.readFile )// true
