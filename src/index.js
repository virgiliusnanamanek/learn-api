const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.write("Hello World");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
