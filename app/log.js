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
	
	var saveLog = function(logObj, callback){
		var logObject = document({
			dataSize: logObj.dataSize,
			dataKeySize: logObj.dataKeySize,
			isEncryption: logObj.isEncryption,
			hasUploadedInput: logObj.hasUploadedInput,
			hasDownloadedOutput: logObj.hasDownloadedOutput
		});
		
		logObject.save(function(err, model, numberAffected){
			return callback(model._id);
		});
	};
	
	var findLog = function(query){
		document.find(query, function(err, results){
			console.log(results);
			return results;
		});
	}
	
	var findLatestLogs = function(count, callback){
		document.find({}).sort('-date').limit(count).lean().exec(function(err, results){
			callback(results);
		});
	};
	
	return {
		save: saveLog,
		find: findLog,
		findLatest: findLatestLogs
	};

};
