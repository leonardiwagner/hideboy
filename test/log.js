var Mongoose = require('mongoose');
var should = require("chai").should();
var Log = require("../app/log");

describe("Log", function(){
	before(function(){
		var mongoUrl = process.env.MONGODB_URL || "mongodb://localhost/cryptography";
		Mongoose.connect(mongoUrl);
	});
	
	it("should log a encrypt command", function(done){
		var log = new Log();
		var saveId = log.save({
			dataSize: 500,
			dataKeySize: 25,
			isEncryption: true,
			hasUploadedInput: false,
			hasDownloadedOutput: false
		}, function(productId){
			//todo
			//console.log(productId);
			done();
		});
	});
	
	it("should list latest logs", function(done){
		var log = new Log();
		var loguess = log.findLatest(3, function(result){
			//todo
			//console.log(result);
			done();
		});
	});
});