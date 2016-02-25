var http_Module = require("http");

console.log("Starting index.js");


//creating a server 
var server = http_Module.createServer();

//adding a event handler for the event named "request"
//every time a request is received by the server .. a request event is generated 
server.on("request",function(req, res){
	res.writeHead(200,{"Content-type":"text/plain"});
	console.log("Just received a request....."+request);
})

//Creating a server is not enough ... developer needs to tell the server on which port should it listen.
server.listen(3000, function(){
	console.log("server listeneing on port no 3000");
});

console.log("Leaving index.js");
