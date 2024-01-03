const http = require("http");
const path = require("path");
const url = require("url");

const server = http.createServer((req, res) => {

  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview")
  {
    res.end("This is the overview");
  }
  else if (pathName === "/product")
  {
    res.end("This is the product");
  }
  else
  {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header":"hello-world",
    })
    res.end("<h1>Page Not Found</h1>");
    }
})

server.listen(8000, "127.0.0.1", () => {
  console.log(`Server runnning on port 8000`)
})