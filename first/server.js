const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hi");
});

server.listen(400);
