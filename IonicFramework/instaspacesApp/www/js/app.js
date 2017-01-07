angular.module('starter', ['ionic','aCarousel'])

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

  .state('gurgaonspc',{
    url: "/gurgaonspc",
     templateUrl: 'templates/gurgaonspc.html',
     controller: 'gurgaonspcCtrl',
     controllerAs: 'ggnCtrl'
  })

  .state('delhispc',{
    url: "/delhispc",
     templateUrl: 'templates/delhispc.html',
     controller: 'delhispcCtrl',
     controllerAs: 'dlCtrl'
  })

  .state('noidaspc',{
    url: "/noidaspc",
     templateUrl: 'templates/noidaspc.html',
     controller: 'noidaspcCtrl',
     controllerAs: 'ndaCtrl'
  })



  /*.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/sliders');
  $stateProvider
  .state('sliders',{
    url: "/sliders",
     templateUrl: 'templates/sliders.html'
  })*/
})
