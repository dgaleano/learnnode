let chat = require('net');
let server = chat.createServer();

server.on('connection',function(client){
	client.write('hola \n ');
	client.write('adios \n');
	client.end();
});
server.listen(9000);
console.log('Chat server runnig');
