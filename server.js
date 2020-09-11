'use strict';

const express = require('express');
const { Server } = require('ws');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new Server({ server });

function onMsg(msg){
	//console.log(msg);
	wss.clients.forEach(function each(client) {
        try {
			
		//console.log(msg.split("#")[0])
		if(msg.split("#")[0]=="alarma")
			console.log("alatma:"+msg.split("#")[1])
		client.send(msg);
		}
		catch(err) {
			
		  console.log("error");
		}
		
    }); 
}
/*
console.log(wss.clients)
	wss.clients.forEach(function each(client) {
        client.send(data);
    });
*/
wss.on('connection', function connection(ws) {
  console.log("new...");
  ws.on('message', function incoming(data) {
    onMsg(data);
  });
  
});

setInterval(() => {
  console.log("send ack");
  wss.clients.forEach((client) => {
    client.send("ack#1");
  });
}, 4000);


