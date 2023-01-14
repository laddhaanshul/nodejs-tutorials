const http = require("http");
const routes = require("./routes");

const server = http.createServer(routes.handler);
// http.createServer(function (req, res) {});
// http.createServer((req, res) => {});

server.listen(3000);
