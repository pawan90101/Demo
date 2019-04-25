var http = require('http');
var dt = require('../js/returnDate.js');
var myLogModule = require('../js/Log.js');
var fs = require('fs');
var server = http.createServer(function (req, res) {
  myLogModule.info('Node.js started');
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('This is a date from diffrent module' + dt.myDateTime());
  res.end('The End!');
});
server.listen(9090);