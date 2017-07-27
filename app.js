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

/*app.controller('DetailsController', function($scope) {
  $scope.message = 'Hello from DetailsController';
});*/


//var mainApp = angular.module("myApp", []);
         
 app.controller('DetailsController', function($scope) {
    $scope.student = {
       firstName: "Mahesh",
       lastName: "Parashar",
       fees:500,
       
       subjects:[
          {name:'Physics',marks:70},
          {name:'Chemistry',marks:80},
          {name:'Math',marks:65},
          {name:'English',marks:75},
          {name:'Hindi',marks:67}
       ],
       
       fullName: function() {
          var studentObject;
          studentObject = $scope.student;
          return studentObject.firstName + " " + studentObject.lastName;
       }
    };
});
