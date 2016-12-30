angular.module('signupApp')


.controller('homeCtrl',function($scope,$state){
    $scope.signupForm= function(){
      $state.go('signup')
    }

  })

.controller('signupCtrl', function($scope, $http, $ionicHistory, ionicToast, ionicDatePicker){
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
      } 
      else{
       ionicToast.show("field can't be empty", 'middle', false, 2500); 
      }


    }

    var ipObj1 = {
      callback: function (val) {  //Mandatory
        console.log('Return value from the datepicker popup is : ' + val, new Date(val));
      },
      disabledDates: [            //Optional
        new Date(2016, 2, 16),
        new Date(2015, 3, 16),
        new Date(2015, 4, 16),
        new Date(2015, 5, 16),
        new Date('Wednesday, August 12, 2015'),
        new Date("08-16-2016"),
        new Date(1439676000000)
      ],
      from: new Date(2012, 1, 1), //Optional
      to: new Date(2016, 10, 30), //Optional
      inputDate: new Date(),      //Optional
      mondayFirst: true,          //Optional
      disableWeekdays: [0],       //Optional
      closeOnSelect: false,       //Optional
      templateType: 'popup'       //Optional
    }

    $scope.openDatePicker = function(){
      ionicDatePicker.openDatePicker(ipObj1);
    }

    
  
   
});


