
// setup interface to handle user input from stdin
let connection;
const { connect } = require("http2");
const { createConnection } = require("net");

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};


const handleUserInput =  (key) => {
  if (key === '\u0003') {
    process.exit();
};

  if (key === 'w') {
  connection.write("Move: up");
  }
  if (key === 'a') {
  connection.write("Move: left")
  }
  if (key === 's') {
  connection.write("Move: down");
  }
  if (key === 'd') {
  connection.write("Move: right");
  }
  if (key === 'g') {
    connection.write("Say: get eaten");
  } 
  if (key === 'b') {
      connection.write("Say: better luck nextTime");
  }
  if (key === 'l') {
    connection.write("Say: LOL");
  }
}

module.exports = {setupInput};

