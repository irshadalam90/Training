angular.module('signupApp')


.controller('homeCtrl',function($scope,$state){
    $scope.signupForm= function(){
      $state.go('signup')
    }

  })



.controller('signupCtrl', function($scope, $http, $ionicHistory,$state, ionicToast, ionicDatePicker){
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

    
  $scope.myGoBack = function() {
      $ionicHistory.goBack();
     }

  $scope.submitData = function(isValid){
   /* $http({
      method: 'POST',
      url: 'http://gase.craveit.in/api/users',
      data: $scope.userData.user.data.type.attributes
    }).then(function mySuccess(response){
            $scope.myWelcome = response.data;
            },function myError(response){
                $scope.myWelcome = response.data;
                });
*/
      if(isValid){
        ionicToast.show('Account created Successfully', 'middle', false, 2500);
        //alert('Account created');
        $state.go('profile');
      } 
      else{
       ionicToast.show("field can't be empty", 'middle', false, 2500); 
      }


    }

    var ipObj1 = {
      callback: function (val) {  //Mandatory
        $scope.dob = new Date(val);
        //console.log('Return value from the datepicker popup is : ' + val, new Date(val));
      }
    }

    $scope.openDatePicker = function(){
      ionicDatePicker.openDatePicker(ipObj1);
    }

  })

.controller('sidemenusCtrl',function($scope){
   
    

  })

.controller('profileCtrl',function($scope,$http,$ionicSideMenuDelegate){
  $http.get('js/data.json').success(function(data){
      $scope.artists=data.artists;
      //$scope.whichartist=$state.params.aId;

     

      $scope.doRefresh = function(){
        $http.get('js/data.json').success(function(data){
        $scope.artists=data;
        $scope.$broadcast('scroll.refreshComplete');
      });

      }

      

      $scope.myGoBack = function() {
      $ionicHistory.goBack();
     }

     $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
  };

     
    });  

  });


