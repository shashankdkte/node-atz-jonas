const fs = require("fs");
const textIn = fs.readFileSync("./input.txt","utf-8");
console.log(textIn);

const textOutput = `This is what we want to  and know about avacado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./output.txt',textOutput);

console.log("File Written");