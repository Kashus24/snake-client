const connect = require("./client");

const handleUserInput = function () {
  if (key === '\u0003') {
    process.exit();
  }
};
// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
