package whitewhale;

/**
 * Auxiliary class to create encryption-table items
 * 
 * @author leonardiwagner@gmail.com
 */
public class EncryptionTableItem
{
	private char position;
	int value;
	
	/**
	 * Create a new encryption-table item
	 * 
	 * @param position	A limit to encryption-table
	 * @param value		A value for this item
	 * @author leonardiwagner@gmail.com
	 */
	public EncryptionTableItem(char position, int value)
	{
		this.position = position;
		this.value = value;
	}
	
	/**
	 * Get encryption-table item position
	 * 
	 * @param position
	 * @param value
	 * @author leonardiwagner@gmail.com
	 */
	public char getPosition() { return this.position; }
	
	/**
	 * Get encryption-table item value
	 * 
	 * @param position
	 * @param value
	 * @author leonardiwagner@gmail.com
	 */
	public int getValue() { return this.value; }
	
}//End class