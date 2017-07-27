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
  $scope.reset = function(){
   $scope.firstName = "Mahesh";
   $scope.lastName = "Parashar";
   $scope.email = "MaheshParashar@tutorialspoint.com";
   $scope.city = ["London", "Brighton","Belfast", "Cardiff", "Newcastle", "Elswhere"];
   $scope.purpose = ["Visa", "Permanent residence"];
   $scope.uniqueId = 0;
   $scope.generateID = function() {
      $scope.uniqueId++;
    };

    $scope.saved = localStorage.getItem('allinfo');
    $scope.allinfo = (localStorage.getItem('allinfo')!==null) ? JSON.parse($scope.saved) : [ {text: 'Learn AngularJS', done: false}, {text: 'Build an Angular app', done: false} ];
    localStorage.setItem('allinfo', JSON.stringify($scope.allinfo));

    $scope.addTodo = function() {
      $scope.allinfo.push({
        text: $scope.todoText,
        done: false
      });
      $scope.todoText = ''; //clear the input after adding
      localStorage.setItem('allinfo', JSON.stringify($scope.allinfo));
    };

    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.allinfo, function(todo){
        count+= todo.done ? 0 : 1;
      });
      return count;
    };

    $scope.archive = function() {
      var olddetails = $scope.allinfo;
      $scope.allinfo = [];
      angular.forEach(olddetails, function(todo){
        if (!todo.done)
          $scope.allinfo.push(todo);
      });
      localStorage.setItem('allinfo', JSON.stringify($scope.allinfo));
    };
  }
  
  $scope.reset();
});
  
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
