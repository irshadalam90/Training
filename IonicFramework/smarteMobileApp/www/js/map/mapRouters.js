angular.module('smarte')
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('map',{
		url: '/map',
		templateUrl: 'templates/map/map.html',
		controller: 'mapCtrl',
		controllerAs: 'map'
	});
});