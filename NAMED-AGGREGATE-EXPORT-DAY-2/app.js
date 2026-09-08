/*
==================================================
#8 — Named & Aggregate Exports in Node.js
==================================================

TOPIC:
Exporting multiple functions and variables from
one Node.js module and importing them using require().

CONCEPTS COVERED:
1. module.exports
2. Named exports
3. Aggregate/object exports
4. require()
5. Destructuring with require()
6. Sharing functions between files

WHAT THIS FILE DEMONSTRATES:
- How to create multiple functions
- How to export multiple functions
- How to import them in another file
- How to use destructuring with require()

FILES USED:
- math.js  → defines and exports functions
- app.js   → imports and uses the functions

EXAMPLE:
module.exports = { add, subtract };

Then in another file:
const { add, subtract } = require("./math");

==================================================
*/

const { add, sub, mul, div } = require("./math");

console.log(add(5, 10));
console.log(sub(5, 10));
console.log(mul(5, 10));
console.log(div(5, 10));
