var static = require('node-static');
var http = require('http');

const port = process.env.PORT || 8080
var file = new(static.Server)(__dirname);

http.createServer(function (req, res) {
  file.serve(req, res);
}).listen(port);