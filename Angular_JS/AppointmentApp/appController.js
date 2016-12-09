/*
angular.module("sampleApp")

.controller("mainController",function($scope,$location){
    
    
    
});

.controller("homeController",function($scope,$location){
    
    $scope.signin = function(){
    $location.path("/welcome");
    }
    
     $scope.signup = function(){
        $location.path("/signup" );
    }
});


.controller("welController",function($scope,$location){
    $scope.message="welcome page";
});

.controller("signupController",function($scope){
    
});
*/


angular.module("sampleApp")

.controller("MyCtrl", ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {
      
      //$scope.name=name;
    var ref = firebase.database().ref();
    var UsersRef = ref.child("Users");
      var list = $firebaseArray(UsersRef);
      
      var user = {"name":name};
      //$scope.user=user;
      
      $scope.saveData= function(){
            list.$add(user).then(function() {
                alert('data saved!');
            }, function(error) {
                alert('Error!');
            });
      };
   }
 ]);
