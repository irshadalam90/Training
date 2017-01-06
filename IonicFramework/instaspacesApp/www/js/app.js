angular.module('starter', ['ionic'])

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

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home',{
    url: "/home",
     templateUrl: 'templates/home.html',
     controller: 'homeCtrl',
     controllerAs: 'hmCtrl'
  })

  
  .state('login',{
    url: '/login',
     templateUrl: 'templates/login.html',
     controller: 'loginCtrl',
     controllerAs: 'lgCtrl'
  })

  
  .state('signup',{
    url: "/signup",
     templateUrl: 'templates/signup.html',
     controller: 'signupCtrl',
     controllerAs: 'sgnupCtrl'
  })

  .state('cur_persent',{
    url: "/cur_persent",
     templateUrl: 'templates/cur_persent.html',
     controller: 'cur_persentCtrl',
     controllerAs: 'curpCtrl'
  })



  /*.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/sliders');
  $stateProvider
  .state('sliders',{
    url: "/sliders",
     templateUrl: 'templates/sliders.html'
  })*/
})
