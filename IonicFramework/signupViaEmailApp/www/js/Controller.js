angular.module('signupApp')


.controller('homeCtrl',function($scope, $state, Facebook){
    $scope.signupForm= function(){
      $state.go('signup')
    }

    var userIsConnected = false;
      
      Facebook.getLoginStatus(function(response) {
        if (response.status == 'connected') {
          userIsConnected = true;
        }
      });

      $scope.IntentLogin = function() {
        if(!userIsConnected) {
         // $scope.login();
        }
      };

    $scope.login = function() {
        Facebook.login(function(response) {
          if (response.status == 'connected') {
            $scope.logged = true;
            //$scope.me();
            console.log(response);
          }
        
        });
      };

       $scope.me = function() {
          Facebook.api('/me', function(response) {
            /**
             * Using $scope.$apply since this happens outside angular framework.
             */
            $scope.$apply(function() {
              $scope.user = response;
            });
            
          });
        };

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
   $scope.showlist=false;
   $scope.liked=false;
  $scope.showItem= function(){
    $scope.showlist=!$scope.showlist;
    $scope.liked=!$scope.liked;
  }
    

  })


.controller('playlistsCtrl', function($scope) {

  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
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


