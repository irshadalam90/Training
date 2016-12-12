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
       }).
   when('/docAppointment',{
       templateUrl: 'docAppointment.html',
       controller: 'appointmentCtrl'
   }).
   when('/continue',{
        teplateUrl: 'continue.html',
       controller: 'continueCtrl'
        });
	
}]);


app.controller("appointmentCtrl",function($scope,$location){
    //$scope.message="appintment controller";
    
    
});


app.controller("continueCtrl",function($scope,$location){
    //$scope.message="continueCtrl controller";
    
    
});






app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    return $firebaseAuth();
  }
]);



app.controller("mainController",function($scope,$location){
    //$scope.message="main controller";
    
    
});



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
     $scope.message= "Signed in as:"+ firebaseUser.uid;
}).catch(function(error) {
     $scope.error=error;
    });
}
}]);








// and use it in our controller
app.controller("signupController", ["$scope", "Auth","$firebaseArray",
  function($scope, Auth,$firebaseArray) {
      
        var ref = firebase.database().ref();
        var UsersRef = ref.child("Users");
        var list = $firebaseArray(UsersRef); 
        
       
      
    $scope.createUser = function() {
        
      $scope.message = null;
      $scope.error = null;
        
    var users = { "name":$scope.uname,
                      "email":$scope.email,
                      "password": $scope.password,
                      "mobile":$scope.mobile,  
                      "gender":$scope.gender, 
                      "userType":$scope.uType
                    };    
        
        
      // Create a new user
      Auth.$createUserWithEmailAndPassword(users.email, users.password)
        .then(function(firebaseUser) {
          $scope.message = "User created with uid: " + firebaseUser.uid;
        }).catch(function(error) {
          $scope.error = error;
        });
        
        
                                    
        
         list.$add(users).then(function() {
                alert('data saved!');
            }, function(error) {
                alert('Error!');
            });
                               
    };

   
  }
]);



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


