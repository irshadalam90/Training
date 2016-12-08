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



app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    return $firebaseAuth();
  }
]);



/*
app.factory("Profile", ["$firebaseObject",
  function($firebaseObject) {
    return function(username) {
      // create a reference to the database node where we will store our data
      var ref = firebase.database().ref("rooms").push();
      var profileRef = ref.child(username);

      // return it as a synchronized object
      return $firebaseObject(profileRef);
    }
  }
]);
*/




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
app.controller("signupController", ["$scope", "Auth","$firebaseObject",
  function($scope, Auth,$firebaseObject) {
    $scope.createUser = function() {
      $scope.message = null;
      $scope.error = null;
       var ref = firebase.database().ref();
       $scope.profile = $firebaseObject(ref.child('Users'));

      // Create a new user
      Auth.$createUserWithEmailAndPassword($scope.email, $scope.password)
        .then(function(firebaseUser) {
          $scope.message = "User created with uid: " + firebaseUser.uid;
        }).catch(function(error) {
          $scope.error = error;
        });
                                    
        
      $scope.profile.$save().then(function() {
        alert('Profile saved!');
      }).catch(function(error) {
        alert('Error!');
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



