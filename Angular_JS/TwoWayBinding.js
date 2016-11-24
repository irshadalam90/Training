/*var myApp = angular.module("myModule",[]);

var controller = myApp.controller("myController", function($scope){
	$scope.message="Hello World";
});*/


var myApp = angular
			.module("myModule",[])
        	.controller("myController", function($scope){
			var employee = {
			firstName: "Irshad",
			lastName: "Alam",
			gender: "Male",
			salary: "20000"
			};
			$scope.employee = employee;
			});