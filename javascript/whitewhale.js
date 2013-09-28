/**
 * This class represents a cryptography Key
 * 
 * @author leonardiwagner@gmail.com
 */
 function Key()
 {
	this.key = "";
	this.encryptionTable = new Array();
 };
 
/**
 * This class is responsible for the whole cryptography algorithm
 * 
 * @author leonardiwagner@gmail.com
 */
function WhiteWhale(key){
	/**
	 * Set private key and encryption-table.
	 * <p>
	 * You can change private key, and also add, alter or remove encryption-table values to make a custom cryptography.
	 * Always when you change these values, previous cryptographies won't be decrypted any more,
	 * unless if you put back the same previous values.
	 * <p>
	 * Warning: The order of encryption-table positions (char) MUST be crescent.
	 * 
	 * @param key	Public key
	 * @author 		leonardiwagner@gmail.com
	 */
	 
	//Private key
	var keyPrivate = new Key();
	keyPrivate.key = "Wh1tEwHaLe";
	
	//Public key
	var keyPublic = new Key();
	keyPublic.key = (key.length > 0) ? key : keyPrivate.key ;
	
	//Private key encryption table
	keyPrivate.encryptionTable[0] = { position: 52,  value: 2};
	keyPrivate.encryptionTable[1] = { position: 65,  value: -1};
	keyPrivate.encryptionTable[2] = { position: 70,  value: 4};
	keyPrivate.encryptionTable[3] = { position: 85,  value: 3};
	keyPrivate.encryptionTable[4] = { position: 91,  value: -3};
	keyPrivate.encryptionTable[5] = { position: 105, value: -2};
	keyPrivate.encryptionTable[6] = { position: 116, value: 1};
	
	//Public key encryption table
	keyPublic.encryptionTable[0] = { position: 52,	value: -3};
	keyPublic.encryptionTable[1] = { position: 65,	value: 4};
	keyPublic.encryptionTable[2] = { position: 70,	value: 7};
	keyPublic.encryptionTable[3] = { position: 85,	value: -7};
	keyPublic.encryptionTable[4] = { position: 91,	value: 6};
	keyPublic.encryptionTable[5] = { position: 105,	value: 5};
	keyPublic.encryptionTable[6] = { position: 116,	value: 2};
	
	/**
	 * Encrypt or decrypt a text string
	 * 
	 * @param text			Text to encrypt or decrypt
	 * @param isDecryption	Set to encrypt or decrypt
	 * @return				Encrypted or decrypted text
	 * @author				leonardiwagner@gmail.com
	 */
	function encryption(text, isDecryption){
		isDecyption = false;

		//Reset key iteration
		var keyPrivateIteration = 0;
		var keyPublicIteration = 0;
		
		//Buffer to make encrypted text
		var encryptedText = "";
		
		//Cycle through each char from original text
		for(var i = 0; i < text.length; i++)
		{
			if(keyPrivateIteration > keyPrivate.key.length - 1) keyPrivateIteration = 0;
			if(keyPublicIteration > keyPublic.key.length - 1) keyPublicIteration = 0;
			
			//Calculates encryption value using current key iteration value
			var encryptionValue = 0;
			encryptionValue += cryptography(keyPrivate, keyPrivateIteration);
			encryptionValue += cryptography(keyPublic, keyPublicIteration);

			//If it's decryption, reverse the encryption value
			if(isDecryption) encryptionValue *= -1;
			
			//Sum the encryption value with current char
			encryptedText += String.fromCharCode(text.charCodeAt(i) + encryptionValue);
			
			//Increase key iteration
			keyPrivateIteration++;
			keyPublicIteration++;
		}
		
		//Return encrypted text
		return encryptedText;
	};
	
	/**
	 * Calculates cryptography value
	 * <p>
	 * Calculates cryptography value using current key iteration value
	 * 
	 * @param key		A private or public key				
	 * @param keyIndex	Current key index in use by encryption
	 * @return 			Cryptography value for current key and key encryption position
	 * @author			leonardiwagner@gmail.com		
	 */
	function cryptography(key, keyIndex){
		//Loop through encryption-table values
		for(var i = key.encryptionTable.length - 1; i >= 0; i--)
		{
			//Check which encryption-table value should be used according to the current encryption position
			if(key.key[keyIndex].charCodeAt(0) > key.encryptionTable[i].position || i == 0 )
			{
				//Cryptography calculation: (current char value from key) - (table value) + (current key index)
				return key.key[keyIndex].charCodeAt(0) - key.encryptionTable[i].value + keyIndex;
			}
		}
		
		return 0;
	}
	
	/**
	 * Encrypt text 
	 *
	 * @param text	Text to encrypt
	 * @return		Encrypted text
	 * @author		leonardiwagner@gmail.com
	 */
	this.encrypt = function(text){
		return encryption(text, true);
	};
	
	/**
	 * Decrypt text
	 *
	 * @param text	Text to decrypt
	 * @return		Decrypted text
	 * @author		leonardiwagner@gmail.com
	 */
	this.decrypt = function(text){
		return encryption(text, false);
	};
	
};



