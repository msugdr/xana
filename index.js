/*
const http = require('http');
var msg;
const server = http.createServer((request, response) => { 
  response.writeHead(200, {"Content-Type": "text/plain"});
  msg = " URI : " + request.url; 
  response.end(msg);});
const port = process.env.PORT || 1337;
server.listen(port);
console.log("Server running at http://localhost:%d", port);
*/
require('http').createServer( function( req, res) {res.end('Hello Sayaka');}) .listen( process.env.PORT);
