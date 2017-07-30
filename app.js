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

app.controller('FormController', function($scope,$window) {
   $scope.city = ["London", "Brighton","Belfast", "Cardiff", "Newcastle", "Elswhere"];
   $scope.purpose = ["Visa", "Permanent residence"];
   $scope.uniqueId = "";
   $scope.possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   $scope.generateID = function() {
      $scope.uniqueId = "";
      for ($scope.i = 0; $scope.i < 13; $scope.i++)
        $scope.uniqueId += $scope.possible.charAt(Math.floor(Math.random() * $scope.possible.length));
      $scope.uniqueId = "#"+$scope.uniqueId;

    };

    //$scope.saved = localStorage.getItem('allinfo');
    

    $scope.saveRegDetails = function(validform) {
      //console.log('hello coming');
      if(validform) {
        var existingEntries = JSON.parse(localStorage.getItem("allinfo"));
        if(existingEntries == null) existingEntries = [];

        if ($scope.purposeDropdown == "Visa") {
          $scope.hiddenPurpose = "#eeecda";
        }else{
          $scope.hiddenPurpose = "rgba(194, 232, 194, 0.54)";
        }

        var entry = {
        text1: $scope.purposeDropdown,
        text2: $scope.cityDropdown,
        text3: $scope.address,
        text4: $scope.interviewer,
        text5: $scope.interviewee,
        text6: $scope.email,
        text7: $scope.phoneNumber,
        text8: $scope.interviewDate,
        text9: $scope.uniqueId,
        text10: $scope.elsewhere,
        text11: $scope.hiddenPurpose,
        done: false
        };
        localStorage.setItem("entry", JSON.stringify(entry));
        /*var allinfo = [];
        allinfo.push(entry);
        localStorage.setItem("allinfo", JSON.stringify(allinfo));*/
        // Save allEntries back to local storage
        existingEntries.push(entry);
        localStorage.setItem("allinfo", JSON.stringify(existingEntries));

      /*$scope.allinfo = [];
      $scope.allinfo.push({
        text1: $scope.purposeDropdown,
        text2: $scope.cityDropdown,
        text3: $scope.address,
        text4: $scope.interviewer,
        text5: $scope.interviewee,
        text6: $scope.email,
        text7: $scope.phoneNumber,
        text8: $scope.interviewDate,
        text9: $scope.uniqueId,
        text10: $scope.elsewhere,
        done: false
      });*/
      $scope.purposeDropdown = '';
      $scope.cityDropdown = '';
      $scope.address = '';
      $scope.elsewhere = '';
      $scope.interviewer = '';
      $scope.interviewee = '';
      $scope.email = '';
      $scope.phoneNumber = '';
      $scope.interviewDate = '';
      $scope.uniqueId = ''; //clear the input after adding
      $scope.hiddenPurpose = '';
      //localStorage.setItem('allinfo', JSON.stringify($scope.allinfo));
      alert('Data Saved successfully');
      $window.location.href = '#/details';
      } else {
        alert('Highlighted Fields are mandatory!!!'); 
      }
     
    };

});
  
app.controller('DetailsController', function($scope) {
    $scope.saved = localStorage.getItem('allinfo');
    $scope.getAllinfo = (localStorage.getItem('allinfo')!==null) ? JSON.parse($scope.saved) : [{}];
    localStorage.setItem('allinfo', JSON.stringify($scope.getAllinfo));
});
