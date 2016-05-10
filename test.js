var http   = require('http');
var server = http.createServer;

server(function(req, res){
	res.writeHead(200,{'Content-Type': 'text/plain'});
	res.end('Esto sirve');
	console.log(req.method + ' ' + req.url);
}).listen(8081,'127.0.0.1');
console.log('El servidor esta corriendo en http://localhost:8080');
