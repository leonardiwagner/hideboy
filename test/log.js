var Mongoose = require('mongoose');
var should = require("chai").should();
var Log = require("../app/log");

describe("Log", function(){
	before(function(){
		var mongoUrl = process.env.MONGODB_URL || "mongodb://localhost/cryptography";
		Mongoose.connect(mongoUrl);
	});
	
	it("should log a encrypt command", function(){
		var log = new Log();
		var saveId = log.save({
			dataSize: 500,
			dataKeySize: 25,
			isEncryption: true,
			hasUploadedInput: false,
			hasDownloadedOutput: false
		});
	});
	
	it("should list latest logs", function(){
		var log = new Log();
		var loguess = log.findLatest(1, function(result){
			//todo
			//console.log(result);
		});
	});
});