angular.module('signupApp')


.controller('homeCtrl',function($scope,$state){
    $scope.signupForm= function(){
      $state.go('signup')
    }

  })

.controller('signupCtrl', function($scope, $http, $ionicHistory){
  //var vm=this;
    $scope.userData={
          "user": {
            "data": {
                "type": "users",
                "attributes": {
                  "provider": "email",
                  "device_udid": "E5FB14E9-123A-498A-BBD8-BFF4E1B28059",
                  "user_progress": "1",
                  "device_token": "3r2rc34cr3rc43c34t3t3xrv4y56h",
                    "device_type": "android"
                }
            }
         }
      }

    
  

  $scope.submitData = function(){
    /*$http({
      method: 'POST',
      url: 'http://gase.craveit.in/api/users',
      data: $scope.userData.user.data.type.attributes
    }).then(function mySuccess(response){
            $scope.myWelcome = response.data;
            },function myError(response){
                $scope.myWelcome = response.data;
                });*/

  
  };  

  $scope.myGoBack = function() {
      $ionicHistory.goBack();
     }
});


