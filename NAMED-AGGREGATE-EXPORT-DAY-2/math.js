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
const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};

const div = (a, b) => {
  return a / b;
};

const mul = (a, b) => {
  return a * b;
};

module.exports = { add, sub, mul, div };

/*
module.exports is a single object or value.
When you reassign module.exports (e.g., module.exports = add), it completely
replaces whatever was previously assigned.
If you reassign it again (module.exports = mult), the previous value is
replaced with mult.
*/
