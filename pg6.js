const http = require('http');
const url = require('url');

// Create the server
const server = http.createServer((req, res) => {

  res.writeHead(200, { 'Content-Type': 'text/html' });
  const parsedUrl = url.parse(req.url, true);
  const parsedData = parsedUrl.query;

  res.end(`<h1>Hello, ${parsedData.name || 'Samuel'}!</h1>`);
});

// Set the server to listen on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});