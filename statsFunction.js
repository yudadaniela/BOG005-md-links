// const ejemplo = [{
//   href: 'https://es.wikipedia.org/wiki/Markdown', 
//   file: 'C:\\Users\\Daniel\\BOG005-md-links\\README.md', 
//   text: 'Markdown', 
//   status: 200,
//   OK: 'ok',
// },
// {
//   href:'https://nodejs.org/', 
//   file: 'C:\\Users\\Daniel\\BOG005-md-links\\README.md', 
//   text: 'Node.js', 
//   status: 200,
//   OK: 'ok',
// },
// {
//   href: 'https://developers.google.com/v8/', 
//   file: 'C:\\Users\\Daniel\\BOG005-md-links\\README.md', 
//   text: 'motor de JavaScript V8 de Chrome', 
//   status: 200,
//   OK: 'ok',
// },
// {
//   href: 'https://developers.google.com/v8/', 
//   file: 'C:\\Users\\Daniel\\BOG005-md-links\\README.md', 
//   text: 'motor de JavaScript V8 de Chrome', 
//   status: 200,
//   OK: 'ok',
// },
// {
//   href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays', 
//   file: 'C:\\Users\\Daniel\\BOG005-md-links\\README.md', 
//   text: 'Arreglos', 
//   status: 400,
//   OK: 'FAIL',
// }];


const stats =(linksArray)=>{
console.table({
  'Total': linksArray.length,
  'Unique': new Set(linksArray.map((link) => link.href)).size
 });
}
// console.table(stats(ejemplo));
 
const statsAndValide=(linksArray)=>{
const linkBroken = linksArray.filter((link) =>link.OK==='FAIL').length;
console.table({
  'Total': linksArray.length,
  'Unique': new Set(linksArray.map((link) => link.href)).size,
  'Broken': linkBroken
  });
 }
//  console.table(statsAndValide(ejemplo));

module.exports = {stats, statsAndValide };


