// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('signupApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('index',{
    url: "/",
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('signup',{
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  $urlRouterProvider.otherwise('/');
})


  .controller('homeCtrl',function($scope,$state){
    $scope.signupForm= function(){
      $state.go('signup')
    }

  })

  

  /*.controller('signupCtrl',function($scope){
    
  });*/

.controller('signupCtrl', function($scope, $http){
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
    $http({
      method: 'POST',
      url: 'http://gase.craveit.in/api/users',
      data: $scope.userData.user.data.type.attributes
    }).then(function mySuccess(response){
            $scope.myWelcome = response.data;
            },function myError(response){
                $scope.myWelcome = response.data;
                });

  
  };  
});

  

