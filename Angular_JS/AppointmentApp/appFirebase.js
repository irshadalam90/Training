var app = angular.module("sampleApp", ['ngRoute','firebase']);


  app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
   $routeProvider.
   
   when('/', {
      templateUrl: 'home.html', 
        controller: 'homeController'
   }).
   
   when('/welcome',{
       templateUrl: 'welcome.html',
       controller: 'welcomeCtrl'
   }).
   
  when('/signup',{
       templateUrl: 'signup.html',
       controller: 'signupController'
       });
	
}]);



app.controller("mainController",function($scope,$location){
    
    
    
});

/*
app.controller("homeController",function($scope,$location){
    
    $scope.signin = function(){
    $location.path("/welcome");
    }
    
     $scope.signup = function(){
        $location.path("/signup" );
    }
});
*/


app.controller("welcomeCtrl",function($scope,$location){
    
    
    
});







//home controller
app.controller('homeController', ['$scope','$location','Auth',
  function($scope,$location,Auth) {
    /*$scope.signin = function(){
    $location.path("/welcome");
    }*/
    
     $scope.signup = function(){
        $location.path("/signup" );
    }  
      
    $scope.login = function(){
      
     Auth.$signInWithEmailAndPassword($scope.email, $scope.password).then(function(firebaseUser) {
     console.log("Signed in as:", firebaseUser.uid);
}).catch(function(error) {
  console.error("Authentication failed:", error);
    });
}
}]);







app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    return $firebaseAuth();
  }
]);

// and use it in our controller
app.controller("signupController", ["$scope", "Auth",
  function($scope, Auth) {
    $scope.createUser = function() {
      $scope.message = null;
      $scope.error = null;

      // Create a new user
      Auth.$createUserWithEmailAndPassword($scope.email, $scope.password)
        .then(function(firebaseUser) {
          $scope.message = "User created with uid: " + firebaseUser.uid;
        }).catch(function(error) {
          $scope.error = error;
        });
    };

   /* $scope.deleteUser = function() {
      $scope.message = null;
      $scope.error = null;

      // Delete the currently signed-in user
      Auth.$deleteUser().then(function() {
        $scope.message = "User deleted";
      }).catch(function(error) {
        $scope.error = error;
      });
    };*/
  }
]);
