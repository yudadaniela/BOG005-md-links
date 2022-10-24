var file = require("file-system");
var fs = require("fs");
const path = require("path");
const marked = require("marked");
const { validateConvertPath, mdSearcher } = require("./src/functionality");

console.log("estoy en read");
const readFileMd = (arrayMd) => {
  //console.log('Ente a la funcion')
  return new Promise((resolve, reject) => {
    arrayMd.forEach((file) => {
      fs.readFile(file, "utf-8", (error, data) => {
        if (error) {
          console.log("hay un error");
          reject(error);
        } else {
          // console.log(`d la ruta md: ${file} el contenido es: ${data}`);
          // resolve({
          // })
          console.log("x");
        }
      });
    });
  });
};
module.exports = { readFileMd };


