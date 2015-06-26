'use strict';

angular.module('myApp.home', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope','$firebaseSimpleLogin',function($scope,$firebaseSimpleLogin) {
  var firebaseObj = new Firebase("https://sizzling-heat-6000.firebaseio.com/");





firebaseObj.child("Questions/QProjectTeam/QPT1").on("value", function(snapshot) {
  alert(snapshot.val());  // Alerts "San Francisco"
 // $scope.proj.DevNo=snapshot.val();
   //alert($scope.proj.DevNo);
   $scope=snapshot.val();
   console.log($scope);   
});
   
   
   
 
  firebaseObj.child("Questions/QProjectTeam/QPT2").on("value", function(snapshot) {
  alert(snapshot.val());  // Alerts "San Francisco"
  //$scope.proj.TestNo=snapshot.val();
   //alert($scope.proj.TestNo);
  });
  
  firebaseObj.child("Questions/QProjectTeam/QPT3").on("value", function(snapshot) {
  alert(snapshot.val());  // Alerts "San Francisco"
 // $scope.proj.TL=snapshot.val();
   //alert($scope.proj.TL);
  });
  
  
  firebaseObj.child("Questions/QProjectTeam/QPT4").on("value", function(snapshot) {
  alert(snapshot.val());  // Alerts "San Francisco"
 // $scope.proj.PM=snapshot.val();
 //  alert($scope.proj.PM);
});







  








  var loginObj = $firebaseSimpleLogin(firebaseObj);
  $scope.user = {};
  $scope.SignIn = function(e){ 
     e.preventDefault();
     var username = $scope.user.email;
     var password = $scope.user.password;
	 
     loginObj.$login('password', {
                email: username,
                password: password
            })
            .then(function(user) {
                //Success callback
                console.log('Authentication successful');
            }, function(error) {
                //Failure callback
                console.log('Authentication failure');
            });
  }
  

  }]);
