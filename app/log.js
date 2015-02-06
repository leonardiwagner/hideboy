var Mongoose = require('mongoose');

var schema = new Mongoose.Schema({
	  date: {type: Date, default: Date.now},
	  dataSize: Number,
	  dataKeySize: Number,
	  isEncryption: Boolean,
	  hasUploadedInput: Boolean,
	  hasDownloadedOutput: Boolean
	});
	
module.exports = Log = function(){
	
	
	
	var document = Mongoose.model('log',schema);
	
	var saveLog = function(logObj){
		var logObject = document({
			dataSize: logObj.dataSize,
			dataKeySize: logObj.dataKeySize,
			isEncryption: logObj.isEncryption,
			hasUploadedInput: logObj.hasUploadedInput,
			hasDownloadedOutput: logObj.hasDownloadedOutput
		});
		
		logObject.save();
		
		return logObject._id;
	};
	
	var findLog = function(query){
		console.log(query);
		document.find(query, function(err, results){
			console.log(results);
			return results;
		});
	}
	
	return {
		save: saveLog,
		find: findLog
	};

};
