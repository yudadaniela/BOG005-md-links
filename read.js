var file = require("file-system");
var fs = require("fs");
const path = require("path");
const marked = require("marked");
const fetch = require("node-fetch");


//console.log("estoy en read");

// const readFileMd = (arrayMd) => {
//   //console.log('Ente a la funcion')
//   promiseReadFile = [];
//   arrayMd.forEach((file) => {
//     promiseReadFile.push(
//       new Promise((resolve, reject) => {
//         fs.readFile(file, "utf-8", (error, data) => {
//           if (error) {
//             console.log("hay un error");
//             reject(error);
//           } else {
//             //console.log(`d la ruta md: ${file} el contenido es: ${data}`);
//             resolve({
//               path: file,
//               data: data,
//             });
//           }
//         });
//       })
//     );
//   });
//   return promiseReadFile;
// };

const readFileMd = (arrayMd) => {
  //console.log('Ente a la funcion')
  promiseReadFile = [];
  links = [];
  arrayMd.forEach((file) => {
    promiseReadFile.push(
      new Promise((resolve, reject) => {
        fs.readFile(file, "utf-8", (error, data) => {
          if (error) {
            console.log("hay un error");
            reject(error);
          } else {
            //console.log(`d la ruta md: ${file} el contenido es: ${data}`);
            let renderer = new marked.Renderer();
            renderer.link = function (href, tittle, text) {
              if (href.includes("http")) {
                links.push({
                  file: file,
                  href: href,
                  text: text,
                });
              }
            };
            marked.marked(data, { renderer: renderer });
            resolve(links);
          }
        });
      })
    );
  });
  //console.log("este es :", promiseReadFile);
  return Promise.all(promiseReadFile).then((res) => res.flat());
};

const linkStatus = (arr) => {
 // console.log("entre a linkstatus", arr);
  promiseLinkStatus = arr.map((links) => {
    return fetch(links.href)
      .then((data) => {
        //console.log("status: ", data.status);
        if (data.status >= 200 && data.status < 400) {
          return {
            href: links.href,
            file: links.file,
            text: links.text,
            status: data.status,
            OK: data.statusText,
          };
        } else if (data.status >= 400 && data.status < 600) {
          return {
            href: links.href,
            file: links.file,
            text: links.text,
            status: data.status,
            OK: "FAIL",
          };
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return Promise.all(promiseLinkStatus).then((res) => res);
};



module.exports = { readFileMd, linkStatus };

//  fetch("https://developers.google.com/v8/").then((data) => console.log(data));
// console.log(chalk.red('Hello 😊)', chalk.underline.bgBlue('world 🌍') + '!'));
