angular.module('smarte')
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('home',{
		url: "/",
		templateUrl: "templates/home/home.html",
		controller: "homeCtrl",
		controllerAs: 'home'
	})

	.state('noConnection', {
      url: "/noConnection",
      templateUrl: "templates/home/noConnection.html",
      controller: "homeCtrl",
      controllerAs: 'home'
    })

    .state('noLocation', {
    	url: "/noLocation",
    	templateUrl: "templates/home/noLocation.html",
    	controller: "homeCtrl",
    	controllerAs: 'home'
    });
});

