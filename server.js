const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World/n');
})

const port = 1818;
const host = 'localhost';
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`)
})
