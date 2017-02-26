var express = require('express');
var http = require('http');
var app = express();

app.use(function(request, response, next) {
  console.log("request: " + request.method + " " + request.url);
  next();
});

app.use(function(request, response) {
  response.writeHead(200, {
    'Content-type': 'text/plain'
  });
  response.end('Hello world');
})

http.createServer(app).listen(3000);

console.log("HTTP server started");
