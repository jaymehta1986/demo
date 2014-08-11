/**
 * @ngdoc overview
 * @name demoApp
 * @description
 * # demoApp
 *
 * Main module of the application.
 */
var demoApp = angular
  .module('demoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })

      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })

      .otherwise({
        redirectTo: '/'
      });
  });

  demoApp.factory("AuthenticationService", function($location) {
    return {
      login: function(credentials) {
        if (credentials.username !== 'Jay' || credentials.password !== 'Mehta') {
          alert('Username must be Jay and password must be Mehta');
        }
        else {
          $location.path('/home');
        }
      },
      logout: function() {
        $location.path('/login');
      }
    };
  });

  demoApp.directive("showsMessageWhenHovered", function() {
  return {
    restrict: "A", // A = Attribute, C = CSS Class, E = HTML Element, M = HTML Comment
    link: function(scope, element, attributes) {
      var originalMessage = scope.message;
      element.bind("mouseenter", function() {
        scope.message = attributes.message;
        scope.$apply();
      });
      element.bind("mouseleave", function() {
        scope.message = originalMessage;
        scope.$apply();
      });
    }
  };
});
