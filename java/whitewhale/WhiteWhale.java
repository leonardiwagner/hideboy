package whitewhale;

import java.lang.StringBuilder;

/**
 * This class is responsible for the whole cryptography algorithm
 * 
 * @author leonardiwagner@gmail.com
 */
public class WhiteWhale {
	//Cryptography Keys
	private Key keyPrivate = null;
	private Key keyPublic = null;
	
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
	public WhiteWhale(String key)
	{
		this.keyPrivate = new Key("Wh1tEwHaLe");
		this.keyPrivate.addEncryptionTableItem((char)52, 2);
		this.keyPrivate.addEncryptionTableItem((char)65, -1);
		this.keyPrivate.addEncryptionTableItem((char)70, 4);
		this.keyPrivate.addEncryptionTableItem((char)85, 3);
		this.keyPrivate.addEncryptionTableItem((char)91, -3);
		this.keyPrivate.addEncryptionTableItem((char)105, -2);
		this.keyPrivate.addEncryptionTableItem((char)116, 1);
		
		this.keyPublic = new Key((key != null) ? key : this.keyPrivate.getKey().toString());
		this.keyPublic.addEncryptionTableItem((char)52, -3);
		this.keyPublic.addEncryptionTableItem((char)65, 4);
		this.keyPublic.addEncryptionTableItem((char)70, 7);
		this.keyPublic.addEncryptionTableItem((char)85, -7);
		this.keyPublic.addEncryptionTableItem((char)91, 6);
		this.keyPublic.addEncryptionTableItem((char)105, 5);
		this.keyPublic.addEncryptionTableItem((char)116, 2);
	}
	
	/**
	 * Instantiate cryptography without public-key 
	 *
	 * @author 		leonardiwagner@gmail.com
	 */
	public WhiteWhale()
	{
		this(null);
	}
	
	/**
	 * Encrypt or decrypt a text string
	 * 
	 * @param text			Text to encrypt or decrypt
	 * @param isDecryption	Set to encrypt or decrypt
	 * @return				Encrypted or decrypted text
	 * @author				leonardiwagner@gmail.com
	 */
	private String encryption(String text, boolean isDecryption)
	{
		//Reset key iteration
		int keyPrivateIteration = 0;
		int keyPublicIteration = 0;
		
		//Buffer to make encrypted text
		StringBuilder encryptedText = new StringBuilder();
		
		//Cycle through each char from original text
		for(int i = 0; i < text.length(); i++)
		{
			//If some key reaches its end, reset iteration again to the beginning
			if(keyPrivateIteration > this.keyPrivate.getKey().length - 1) keyPrivateIteration = 0;
			if(keyPublicIteration > this.keyPublic.getKey().length - 1) keyPublicIteration = 0;
			
			//Calculates encryption value using current key iteration value
			int encryptionValue = 0;
			encryptionValue += this.cryptography(this.keyPrivate, keyPrivateIteration);
			encryptionValue += this.cryptography(this.keyPublic, keyPublicIteration);
			
			//If it's decryption, reverse the encryption value
			if (isDecryption) encryptionValue *= -1;
			
			//Sum the encryption value with current char
			encryptedText.append((char)((int)text.charAt(i) + encryptionValue));
			
			//Increase key iteration 
			keyPrivateIteration++;
			keyPublicIteration++;
		}
		
		//Return encrypted text
		return encryptedText.toString();
	}
	
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
	private int cryptography(Key key, int keyIndex)
	{
		//Loop through encryption-table values
		for(int i = key.getEncryptionTableSize() - 1; i>= 0; i--)
		{
			//Check which encryption-table value should be used according to the current encryption position
			if(key.getKey()[keyIndex] > key.getEncryptionTablePosition(i) || i == 0)
			{
				//Cryptography calculation: (current char value from key) - (table value) + (current key index)
				return key.getKey()[keyIndex] - key.getEncryptionTableValue(i) + keyIndex; 
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
	public String encrypt(String text)
	{
		return this.encryption(text, false);
	}
	
	/**
	 * Decrypt text
	 *
	 * @param text	Text to decrypt
	 * @return		Decrypted text
	 * @author		leonardiwagner@gmail.com
	 */
	public String decrypt(String text)
	{
		return this.encryption(text, true);
	}
	
}//End class
