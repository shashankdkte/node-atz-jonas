const EventEmitter = require("events");
const http = require("http");
const emitter = new EventEmitter();

emitter.on("newlog", () => {
  console.log("Recived a Request for new connection ");
});

emitter.on("newlog", () => {
  console.log("Message request email sent");
});

emitter.on("newlog", (port) => {
  console.log(`Message sent over ${port}`);
});
emitter.emit("newlog", 1550);

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Recived a Request");
  res.end("Other Request");
});

server.on("request", (req, res) => {
  console.log("Recived Another Request");
 
});

server.on("close", (req, res) => {
  console.log("Server closed");
});

server.listen(3000, '127.0.0.1',() => {
  console.log("Server is running on port 3000");
});
