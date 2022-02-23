// Setup main app/server
var http = require('http'), 
	express = require('express'), 
	app = express(), 
	server = http.createServer(app);


var globe = require("globe");

// add app configuration...

// Routes
app.get('/', function(req, res){
	
	// get query...
	var output = globe.create("container", "/sample-json/search.json");
	
	res.send( output );
	
});

// Listen on this port
server.listen(80); 
