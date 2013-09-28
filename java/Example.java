import whitewhale.WhiteWhale;

public class Example {
	public static void main(String[] args) { 
		String text = "The quick brown fox jumps over the lazy dog";
		System.out.println(text);
		
		WhiteWhale whiteWhaleEncrypt = new WhiteWhale("example");
		String encrypted = whiteWhaleEncrypt.encrypt(text);
		System.out.println(encrypted);
		
		WhiteWhale whiteWhaleDecrypt = new WhiteWhale("example");
		String decrypted = whiteWhaleDecrypt.decrypt(encrypted);
		System.out.println(decrypted);
	}
}
