angular.module('starter')


.controller('homeCtrl', function($scope,$state){
	//var vm = this;
	$scope.login = function(){
		$state.go('login')
	}

	$scope.signup= function(){
      $state.go('signup')
    }

})

.controller('loginCtrl', function($scope,$state,$ionicHistory){
	//var vm = this;

	$scope.userlogin = function(isValid){
		if(isValid){
			$state.go('cur_persent');
		}

	}

	$scope.myGoBack = function(){
		$ionicHistory.goBack();
	}
})

.controller('signupCtrl', function($scope,$ionicHistory){
	//var vm = this;
	$scope.myGoBack = function(){
		$ionicHistory.goBack();
	}
})

.controller('cur_persentCtrl', function($scope){
	//var vm = this;
	
	
})