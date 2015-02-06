module.exports = function(){
	
	var privateKey = {
		key: "ThIs Is ThE PriVaTe KeY! WhOa SuPer SeCreT, DoEsN't?",
		encryptionTable: Array()
	};
	
	var that = this;
	var publicKey = {
		key: "",
		encryptionTable: [
			{ position: 52,	value: -3},
			{ position: 65,	value: 4},
			{ position: 70,	value: 7},
			{ position: 85,	value: -7},
			{ position: 91,	value: 6},
			{ position: 105, value: 5},
			{ position: 116, value: 2}
		]
	};
	

	//Private key encryption table
	privateKey.encryptionTable[0] = { position: 52,  value: 2};
	privateKey.encryptionTable[1] = { position: 65,  value: -1};
	privateKey.encryptionTable[2] = { position: 70,  value: 4};
	privateKey.encryptionTable[3] = { position: 85,  value: 3};
	privateKey.encryptionTable[4] = { position: 91,  value: -3};
	privateKey.encryptionTable[5] = { position: 105, value: -2};
	privateKey.encryptionTable[6] = { position: 116, value: 1};
	

	var cryptography = function cryptography(key, keyIndex){
		//Loop through encryption-table values
		for(var i = key.encryptionTable.length - 1; i >= 0; i--)
		{
			//Check which encryption-table value should be used according to the current encryption position
			if(key.key[keyIndex] != null && (key.key[keyIndex].charCodeAt(0) > key.encryptionTable[i].position || i === 0 ))
			{
				//Cryptography calculation: (current char value from key) - (table value) + (current key index)
				return key.key[keyIndex].charCodeAt(0) - key.encryptionTable[i].value + keyIndex;
			}
		}
		return 0;
	};
	
	var encrypt = function(text, pk, isDecryption){
		var privateKeyIteration = 0;
		var publicKeyIteration = 0;
		var encryptedText = "";
		publicKey.key = pk;
		
		for(var i = 0; i < text.length; i++){
			if(privateKeyIteration > privateKey.key.length - 1) privateKeyIteration = 0;
			if(publicKeyIteration > publicKey.key.length - 1) publicKeyIteration = 0;
			
			//Calculates encryption value using current key iteration value
			var encryptionValue = cryptography(privateKey, privateKeyIteration);
			encryptionValue += cryptography(publicKey, publicKeyIteration);
			
			//If it's decryption, reverse the encryption value
			if(isDecryption) encryptionValue *= -1;
			
			//Sum the encryption value with current char, that's make the encryption
			encryptedText += String.fromCharCode(text.charCodeAt(i) + encryptionValue);
			
			privateKeyIteration++;
			publicKeyIteration++;
		}
		
		return encryptedText;
	};
	
	var encryptText = function(text, publicKey){
		return encrypt(text, publicKey, false);
	};
	
	var decryptText = function(text, publicKey){
		return encrypt(text, publicKey, true);
	};
	
	return {
		encrypt: encryptText,
		decrypt: decryptText
	};
	
};