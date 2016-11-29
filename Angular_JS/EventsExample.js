var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.ovrcount = 0;
    $scope.clkcount = 0;
    $scope.upcount = 0;
    $scope.dwncount = 0;
    $scope.mentercount = 0;
    $scope.dblclkcount = 0;
    
    
    $scope.showMe=false;
    $scope.myFunc= function(){
        $scope.showMe= !$scope.showMe;
    }
    
    $scope.hideMe=false;
    $scope.myFunc2= function(){
        $scope.hideMe=!$scope.hideMe;
    }
    
    
    $scope.focus = function(){
        $scope.text="Focus on Textbox";
    }
    
    $scope.blur = function(){
        $scope.text="";
    }
    
});