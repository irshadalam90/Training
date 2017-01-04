angular.module('signupApp', ['ionic','ionic-toast','ionic-datepicker','facebook'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider,FacebookProvider){
  FacebookProvider.init('212482799211850'); 

  $stateProvider
  .state('sidemenus.home',{
    url: "/home",
      views: {
        'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('signup',{
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('sidemenus',{
    url: '/sidemenus',
    abstract: true,
    templateUrl: 'templates/sidemenus.html',
    controller: 'sidemenusCtrl'
    
  })

  /*.state('profile',{
    url: '/profile',
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
     
  })*/

  .state('sidemenus.profile',{
    url: '/profile',
    views:{
      'menuContent':{
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('sidemenus.playlists',{
    url: '/playlists',
    views:{
      'playlistsContent':{
        templateUrl: 'templates/playlists.html',
        controller: 'playlistsCtrl'
      }
    }
  })

  

  $urlRouterProvider.otherwise('/sidemenus/profile');
})


  

  

 


  

