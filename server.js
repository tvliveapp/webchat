'use strict';
/*
const express = require('express');
const { Server } = require('ws');
*/
const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';
/*
const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

/*

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
console.log(wss.clients)
	wss.clients.forEach(function each(client) {
        client.send(data);
    });

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
}, 3000);

var http = require('http');

http.createServer(function(request, response) {
  var proxy = http.createClient(80, request.headers['host'])
  var proxy_request = proxy.request(request.method, request.url, request.headers);
  proxy_request.addListener('response', function (proxy_response) {
    proxy_response.addListener('data', function(chunk) {
      response.write(chunk, 'binary');
    });
    proxy_response.addListener('end', function() {
      response.end();
    });
    response.writeHead(proxy_response.statusCode, proxy_response.headers);
  });
  request.addListener('data', function(chunk) {
    proxy_request.write(chunk, 'binary');
  });
  request.addListener('end', function() {
    proxy_request.end();
  });
}).listen(PORT);


*/

var http = require('http');
//var sys  = require('sys');

http.createServer(function(request, response) {
  console.log(request.connection.remoteAddress + ": " + request.method + " " + request.url);
  var proxy = http.http.request(80, request.headers['host'])
  var proxy_request = proxy.request(request.method, request.url, request.headers);
  proxy_request.addListener('response', function (proxy_response) {
    proxy_response.addListener('data', function(chunk) {
      response.write(chunk, 'binary');
    });
    proxy_response.addListener('end', function() {
      response.end();
    });
    response.writeHead(proxy_response.statusCode, proxy_response.headers);
  });
  request.addListener('data', function(chunk) {
    proxy_request.write(chunk, 'binary');
  });
  request.addListener('end', function() {
    proxy_request.end();
  });
}).listen(PORT);
