var angularApp = angular.module('angularApp', []);

angularApp.controller('Ctrl', function ($scope, $http) {
	$scope.app = {
		inputLabel: "",
		outputLabel: "",
		input: "",
		output: "",
		key: "",
		successMessage: "",
		commandName: "",
		commandFunction: null,
		hasCommandExecuted: false
	};

	var encrypt = function(isEncrypt){
		var url = mode ? "/decrypt" : "/decrypt";
		$http.post(url, {text: $scope.app.input, key: $scope.app.key})
		.success(function(data, status, headers, config) {
			$scope.app.output = data;
			$scope.app.isCommandExecuted = true;
		})
		.error(function(data, status, headers, config) {
		});
	};
	
  var mode = [
	{
		inputLabel: "Text to encrypt",
		outputLabel: "Encrypted text",
		commandName: "Encrypt Text",
		commandFunction: encrypt(true),
		successMessage: "Text encrypted! Now you can store this encrypted text anywhere and no one will know what it means without the correct key! Store the key somewhere safe, or share with people that you want to decrypt the message",
		subCommand1Name: "New Encrypt",
		subCommand2Name: "Decrypt Text"
	},{
		inputLabel: "Text to decrypt",
		outputLabel: "Decrypted text",
		commandName: "Decrypt Text",
		commandFunction: encrypt(false),
		successMessage: "Text decrypted! If you used the correct key probably you can read now. If you can't read, you've used a wrong key, or this is not your business!",
		subCommand1Name: "New Decrypt",
		subCommand2Name: "Encrypt Text"
	}
  ];

	$scope.changeMode = function(mode){
		setMode(mode);
	};
	
	var setMode = function(modeIndex){
		$scope.app.inputLabel = mode[modeIndex].inputLabel;
		$scope.app.outputLabel = mode[modeIndex].outputLabel;
		$scope.app.commandName = mode[modeIndex].commandName;
		$scope.app.successMessage = mode[modeIndex].successMessage;
		$scope.app.subCommand1Name = mode[modeIndex].subCommand1Name;
		$scope.app.subCommand2Name = mode[modeIndex].subCommand2Name;
	};
	
	setMode(0);
	
	



});