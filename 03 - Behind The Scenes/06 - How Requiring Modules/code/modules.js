// console.log(arguments);
// console.log(require("module").wrapper);

const calc = require("./calculator");
// const calc_o = require("./calculator_o");
const {add,multiply} = require("./calculator_o");
const calculator = new
  calc();
console.log(calculator.add(2, 5));
console.log(calculator.multiply(2, 5));
console.log(add(4, 8));


//caching 
require("./cons")();
require("./cons")();
require("./cons")();