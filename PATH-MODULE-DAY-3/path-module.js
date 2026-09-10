const path = require("path");

console.log(__dirname);
console.log(__filename);

//school management system
// folder/students/data/txt

const filepath = path.join("folder", "student", "data.txt");

// console.log(filepath);

const parseDate = path.parse(filepath);
const resolvePath = path.resolve(filepath);
const extname = path.extname(filepath);
const basename = path.basename(filepath);
const dirname = path.dirname(filepath);

console.log({ parseDate, resolvePath, extname, basename, dirname });
