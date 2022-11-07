const { readFileMd, linkStatus } = require("../read");
const array=['C:\\Users\\Daniel\\BOG005-md-links\\src\\carpetaPrueba\\otra_carpeta\\otro.md'];
const objRead=[
    {
      file: "C:\\Users\\Daniel\\BOG005-md-links\\src\\carpetaPrueba\\otra_carpeta\\otro.md",
      href: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/",
      text: "Array - MDN",
    }
  ];

const objStatus =[
    {
      href: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/",
      file: "C:\\Users\\Daniel\\BOG005-md-links\\src\\carpetaPrueba\\otra_carpeta\\otro.md",
      text: "Array - MDN",
      status: 200,
      OK: "OK",
    },
  ];


describe("function Read files", () => {
  it("readFilesMd is a function", () => {
    expect(typeof readFileMd).toBe("function");
  });
  it("read a file", () =>
    expect(readFileMd(array)).resolves.toEqual(objRead));
});

describe("function Read files", () => {
  it("readFilesMd is a function", () => {
    expect(typeof linkStatus).toBe("function");
  });
  it("read a file", () =>
    expect(linkStatus(objRead)).resolves.toEqual(objStatus));
});
