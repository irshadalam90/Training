var app = angular.module('myApp', []);
app.controller('validateCtrl', function($scope) {
    $scope.submitForm= function(){
        if($scope.myForm.$valid){
            alert('Form is successfully Submitted');
        }
    }
  
});