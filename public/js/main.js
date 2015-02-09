var angularApp = angular.module('angularApp', []);

angularApp.controller('Ctrl', function ($scope, $http) {
  $scope.app = {input: "oi", key: "teste", output: "afer"};

  $scope.encrypt = function(){
    $http.post('/encrypt', {text: $scope.app.input, key: $scope.app.key})
    .success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
      
      $scope.app.output = data;

    })
    .error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  };



});