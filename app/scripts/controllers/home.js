angular.module('demoApp')
  .controller('HomeController', function($scope, AuthenticationService) {
  	$scope.title = "Awesome Home";
  	$scope.message = "Mouse Over these images to see a directive at work!";
  });