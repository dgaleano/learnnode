'use strict';
let chat = require('net');
let server = chat.createServer();

server.on('connection',function(client){
	client.write('hola \n ');
	client.on('data',recieve=>{
		console.log(recieve);
	});
});
server.listen(9000);
console.log('Chat server runnig');
