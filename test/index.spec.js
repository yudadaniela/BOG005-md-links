const { mdLinks } = require("../index");

path = "C:\\Users\\Daniel\\BOG005-md-links\\src\\carpetaPrueba\\prueba.md";

const validateTrue = [
  {
    href: "https://curriculum.laboratoria.la/es/topics/javascript/04-arrays",
    file: "C:\\Users\\Daniel\\BOG005-md-links\\src\\carpetaPrueba\\prueba.md",
    text: "Arreglos",
    status: 200,
    OK: "OK",
  },
  {
    href: "https://www.pixar.com/error404",
    file: "C:\\Users\\Daniel\\BOG005-md-links\\src\\carpetaPrueba\\prueba.md",
    text: "Roto jaja",
    status: 404,
    OK: "FAIL",
  },
];
const validateFalse = [
  {
    file: "C:\\Users\\Daniel\\BOG005-md-links\\src\\carpetaPrueba\\prueba.md",
    href: "https://curriculum.laboratoria.la/es/topics/javascript/04-arrays",
    text: "Arreglos",
  },
  {
    file: "C:\\Users\\Daniel\\BOG005-md-links\\src\\carpetaPrueba\\prueba.md",
    href: "https://www.pixar.com/error404",
    text: "Roto jaja",
  },
];

describe("mdLinks", () => {
  it("mdLinks should be a function", () => {
    expect(typeof mdLinks).toBe("function");
  });

  it("mdLinks when validate is false", () => {
    mdLinks(path, { validate: false }).then((array) => {
      expect(array).toEqual(validateFalse);
    });
  });

  it("mdLinks when validate is true", () => {
     mdLinks(path, { validate: true }).then((array) => {
      expect(array).toEqual(validatetrue);
    });
  });
});
