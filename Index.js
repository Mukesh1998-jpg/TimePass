var http_Module = require("http");

console.log("Starting index.js");


//creating a server
//while creating the server , the lambda passed is automatically added to request event internally. 
var server = http_Module.createServer(function(req, res){
	res.writeHead(200,{"Content-type":"text/plain"});
	res.end("Response from the server side.\n\n");
});

//Creating a server is not enough ... developer needs to tell the server on which port should it listen.
server.listen(3000, function(){
	console.log("server listeneing on port no 3000");
});

console.log("Leaving index.js");
