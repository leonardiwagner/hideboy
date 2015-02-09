var angularApp = angular.module('angularApp', []);

angularApp.controller('Ctrl', function ($scope, $http) {
	$scope.app = {
		input: "",
		output: "",
		key: "",
		commandName: "",
		modeIndex: null,
		hasCommandExecuted: false
	};

	$scope.encrypt = function(){
		var url = $scope.app.modeIndex == 0 ? "/encrypt" : "/decrypt";
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
		inputTip: "Write here what you want to encrypt",
		keyTip: "To make safer, you can use a key, and only with this key you can decrypt text further",
		keyPlaceholder: "(Optional) write some password to use as key to decrypt this text further",
		outputLabel: "Encrypted text",
		commandName: "Encrypt Text",
		successMessage: "Text encrypted! Now you can store this encrypted text anywhere and no one will know what it means without the correct key! Store the key somewhere safe, or share with people that you want to decrypt the message",
		subCommand1Name: "New Encrypt",
		subCommand2Name: "Decrypt Text"
	},{
		inputLabel: "Text to decrypt",
		outputLabel: "Decrypted text",
		commandName: "Decrypt Text",
		successMessage: "Text decrypted! If you used the correct key probably you can read now. If you can't read, you've used a wrong key, or this is not your business!",
		subCommand1Name: "New Decrypt",
		subCommand2Name: "Encrypt Text"
	}
  ];

	$scope.changeMode = function(mode){
		setMode(mode);
	};
	
	var setMode = function(modeIndex){
		$scope.app.modeIndex = modeIndex;
		$scope.app.inputLabel = mode[modeIndex].inputLabel;
		$scope.app.inputTip = mode[modeIndex].inputTip;
		$scope.app.keyTip = mode[modeIndex].keyTip;
		$scope.app.keyPlaceholder = mode[modeIndex].keyPlaceholder;
		$scope.app.outputLabel = mode[modeIndex].outputLabel;
		$scope.app.commandName = mode[modeIndex].commandName;
		$scope.app.successMessage = mode[modeIndex].successMessage;
		$scope.app.subCommand1Name = mode[modeIndex].subCommand1Name;
		$scope.app.subCommand2Name = mode[modeIndex].subCommand2Name;
	};
	
	setMode(0);
	
	



});