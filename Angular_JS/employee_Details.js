

/*var myApp = angular.module("myModule",[]);

myApp.controller("myController", function($scope){
	var employee = {
		firstName: "Irshad",
		lastName: "Alam",
		gender: "Male",
		address: "Delhi"
	};
	$scope.employee = employee;
});*/

//OR

var myApp = angular
			.module("myModule",[])
        	.controller("myController", function($scope){
			var employee = {
			firstName: "Irshad",
			lastName: "Alam",
			gender: "Male",
			address: "Delhi"
			};
			$scope.employee = employee;
			});
