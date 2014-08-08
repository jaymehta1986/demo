angular.module('demoApp')
  .controller('LoginController', function($scope, $location, AuthenticationService) {
  	window.scope = $scope;
  	$scope.credentials = { username: "", password: "" };

  	$scope.login = function() {
	    AuthenticationService.login($scope.credentials);
	  }
  });