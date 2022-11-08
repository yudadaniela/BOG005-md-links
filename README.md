# Markdown Links
![Esta es una imagen de ejemplo](/img/Captura.PNG)
 

## Index

* [1. Proyect resume](#1-Project-resume)
* [2. Installation](#2-Installation)
* [3. Usage](#3-Usage)
* [4. Commands](#4-Commands)
* [5. Author](#5-Author)


***

## 1.  Proyect resume
The mdlinks-yuda library analyzes markdown files and depending on what the user requires, it will deliver statistical and validation information.

## 2. Installation

On the command line run this:
  ```
  npm install mdlinks-yuda
  ```

## 3. Usage

**Import** the library with `require()`
```js
const {mdLinks} = require('mdlinks-yuda');

```
## 4. Commands

`mdlinks-yuda <path-to-file> [options]`

##### Arguments

* `path`: Absolute or relative path to the file or directory.

* `options`:
  - `validate`: Determines if you want to validate the links found.
  - `stats`: Obtains an output with general statistical information.

###Options

`validate`

$ mdlinks-yuda ./some/example.md --validate

- `href`: URL found.

- `text`: Text that appeared inside the link.

- `file`: Path of the file where the link was found.

- `status`: HTTP response code.
- `OK`: Fail message in case of failure or OK in case of success.

With `validate:false` :

$ mdlinks-yuda ./some/example.md 

* `href`: URL found.
* `text`: Text that appeared inside the link.
* `file`: Path of the file where the link was found.

If we pass the `--stats` option the output will be a text with statistics
basics about the links.

```sh
$ mdlinks-yuda ./some/example.md --stats
Total: 3
Unique: 3
```

We can also combine `--stats` and `--validate` to get statistics that
need the validation results.

```sh
$ mdlinks-yuda ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```
## 5. Author
Daniela Nieto 





















