package whitewhale;

import java.util.ArrayList;

/**
 * This class represents a cryptography Key
 * 
 * @author leonardiwagner@gmail.com
 */
public class Key {
	
	private char[] key;
	private ArrayList<EncryptionTableItem> encryptionTable = new ArrayList<EncryptionTableItem>();
	
	/**
	 * Set key value
	 * 
	 * @param key
	 * @author leonardiwagner@gmail.com
	 */
	public Key(String key)
	{
		this.key = key.toCharArray();
	}
	
	/**
	 * Get key value
	 * 
	 * @return	Key value
	 */
	public char[] getKey()
	{
		return this.key;
	}
	
	/**
	 * Add a item into encryption-table
	 * 
	 * @param position	A limit to encryption-table
	 * @param value		A value for this item
	 * @author 			leonardiwagner@gmail.com
	 */
	public void addEncryptionTableItem(char position, int value)
	{
		encryptionTable.add(new EncryptionTableItem(position, value));
	}
	
	/**
	 * Get number of items of encryption-table
	 * 
	 * @return	Encryption-table number of items
	 * @author 	leonardiwagner@gmail.com
	 */
	public int getEncryptionTableSize()
	{
		return this.encryptionTable.size();
	}
	
	/**
	 * Get a encryption-table position
	 * 
	 * @param	Index of encryption-table item
	 * @return	Position from a encryption-table item
	 * @author 	leonardiwagner@gmail.com
	 */
	public char getEncryptionTablePosition(int tableIndex)
	{
		return this.encryptionTable.get(tableIndex).getPosition();
	}
	
	/**
	 * Get a encryption-table value
	 * 
	 * @param	Index of encryption-table item
	 * @return	Value from a encryption-table item
	 * @author 	leonardiwagner@gmail.com
	 */
	public int getEncryptionTableValue(int tableIndex)
	{
		return this.encryptionTable.get(tableIndex).getValue();
	}
	
}//End class
