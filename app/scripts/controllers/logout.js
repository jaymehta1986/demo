angular.module('demoApp')
  .controller('LogoutController', function($scope, AuthenticationService) {
  	
  	$scope.logout = function() {
	    AuthenticationService.logout();
	  };
  });