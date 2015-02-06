var should = require("chai").should();
var Cryptography = require("../app/cryptography");

describe("Cryptography", function(){
	it("should encrypt with a small public-key", function(){
		var cryptography = new Cryptography();
		var text = "This is a text to encrypt";
		var expectedEncryptedText = "ďĻěŒ­Ěř¬ĤûįõĻŜąĽŎèŊĆĩŖŐčĕ";
		var publicKey = "pk";

		var encryptedText = cryptography.encrypt(text, publicKey);
		
		encryptedText.should.equal(expectedEncryptedText);
	});
	
	it("should encrypt with a large public-key", function(){
		var cryptography = new Cryptography();
		var text = "This is a text to encrypt";
		var expectedEncryptedText = "ñķĕŜiěŢoĜÀłøĻšćńŠĉĔęĭűŜĜå";
		var publicKey = "This is a veeeeery large public, OK not THAT large, but still large enough to make this test safe for large public keys!!!!!!";

		var encryptedText = cryptography.encrypt(text, publicKey);
		
		encryptedText.should.equal(expectedEncryptedText);
	});
	
	it("should encrypt without a public-key", function(){
		var cryptography = new Cryptography();
		var text = "This is a text to encrypt";
		var expectedEncryptedText = "¤Ô°ëB³îE¹ÄÐõÖãß¾ïå¦ª";
		var publicKey = "";

		var encryptedText = cryptography.encrypt(text, publicKey);
		
		encryptedText.should.equal(expectedEncryptedText);
	});
	
	it("should not produce same encrypt for 2 different public-keys", function(){
		var cryptography = new Cryptography();
		var text = "This is a text to encrypt";
		var publicKeyA = "Team #A";
		var publicKeyB = "Team #B";

		var encryptedTextA = cryptography.encrypt(text, publicKeyA);
		var encryptedTextB = cryptography.encrypt(text, publicKeyB);
		
		encryptedTextA.should.not.equal(encryptedTextB);
	});
});