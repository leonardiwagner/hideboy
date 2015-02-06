var should = require("chai").should();
var Cryptography = require("../app/cryptography");

describe("Decrypt", function(){
	it("should decrypt with a small public-key", function(){
		var cryptography = new Cryptography();
		var encryptedText = "ďĻěŒ­Ěř¬ĤûįõĻŜąĽŎèŊĆĩŖŐčĕ";
		var expectedDecryptedText = "This is a text to encrypt";
		var publicKey = "pk";
		
		var decryptedText = cryptography.decrypt(encryptedText, publicKey);
		
		decryptedText.should.equal(expectedDecryptedText);
	});
	
	it("should decrypt with a large public-key", function(){
	
	});
	
	it("should decrypt without a public-key", function(){
	
	});
	
	it("should not decrypt correctly with a wrong public-key", function(){
	
	});
});