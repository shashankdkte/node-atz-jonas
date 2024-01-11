const fs = require("fs");
const crypto = require("crypto");
const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 5;

setTimeout(() => console.log("Timer 1 Finished"), 0);
setImmediate(() => console.log("Immediate 1 Finished"));

fs.readFile("test-file.txt", () => {
  console.log("File Read Finished");
  console.log("-----------------------");

  setTimeout(() => console.log("Timer 2 Finished"), 0);
  setTimeout(() => console.log("Timer 3 Finished"), 3000);
  setImmediate(() => console.log("Immediate 2 Finished"));
  process.nextTick(() => console.log("Next Tick Finished"));

  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log("Password Hash Finished");
    console.log(Date.now() - start);
  });
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log("Password Hash Finished");
    console.log(Date.now() - start);
  });
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log("Password Hash Finished");
    console.log(Date.now() - start);
  });
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log("Password Hash Finished");
    console.log(Date.now() - start);
  });
});

console.log("Hello from the top-level code");
