//const mdLinks = require('../');
const {validateConvertPath, mdSearcher} = require("../src/pathFunctionality");
const path = 'README.md'
const pathAbs = 'C:\\Users\\Daniel\\BOG005-md-links\\README.md'
const pathAbsNoMd = 'C:\\Users\\Daniel\\BOG005-md-links\\index.js'



describe('test function validateConvertPath', () => {

  it("validateConvertPath it's function", () => {
    expect(typeof validateConvertPath).toBe("function");
  });

  it('convert path relative to path absolute ', () => {
    expect(validateConvertPath(path)).toStrictEqual('C:\\Users\\Daniel\\BOG005-md-links\\README.md');

  });

});
describe('test function mdSearcher', () => {

  it("mdSearcher it's function", () => {
    expect(typeof mdSearcher).toBe("function");
  });

  it("file it's a .md", () => {
    expect(mdSearcher(pathAbs)).toStrictEqual(['C:\\Users\\Daniel\\BOG005-md-links\\README.md']);
  });
  it("file it's a .md", () => {
    expect(mdSearcher(pathAbsNoMd)).toStrictEqual('Este archivo no es .md');
  });

});


