var express = require('express');
var app = express();
var http = require('http').Server(app);
var mongoose = require('mongoose');


var port = process.env.PORT || 5000;
var mongoUrl = process.env.MONGO_URL || "mongodb://localhost/cryptography";
mongoose.connect(mongoUrl);

var Log = require("./app/log");

console.log("mongo db url:" + mongoUrl);


//var router = require('./app/routes/router')(app);
//var socketManager = require('./app/sockets/sockets')(http);

app.use(express.static(__dirname + "/public"));



http.listen(port, function(){
  console.log('listening on *:' + port);
  

});

app.get('/', function(req, res){
	res.sendFile("index.html",  { root: path.join(__dirname, '../public') });
});

