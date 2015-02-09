var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

var port = process.env.PORT || 5000;
var mongoUrl = process.env.MONGO_URL || "mongodb://localhost/cryptography";

var Log = require("./app/log");
var Cryptography = require("./app/cryptography");




http.listen(port, function(){
  console.log('listening on *:' + port);
  mongoose.connect(mongoUrl);
  console.log("mongo db url:" + mongoUrl);
});


app.get('/', function(req, res){
	res.sendFile("index.html",  { root: path.join(__dirname, '../public') });
});

app.post('/encrypt', function(req, res){
	var crypto = new Cryptography();
	var result = crypto.encrypt(req.body.text, req.body.key)
	res.send(result);
	res.end();
});

