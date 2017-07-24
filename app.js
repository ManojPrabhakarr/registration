var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/form.html',
    controller  : 'FormController'
  })

  .when('/details', {
    templateUrl : 'pages/details.html',
    controller  : 'DetailsController'
  })

  .otherwise({redirectTo: '/'});
});

app.controller('FormController', function($scope) {
  $scope.message = 'Hello from FormController';
});

app.controller('DetailsController', function($scope) {
  $scope.message = 'Hello from DetailsController';
});
