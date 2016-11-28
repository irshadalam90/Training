/*
myApp = angular.module("myModule", [])
            .controller("myController", function($scope,$http){
            $http({
                method: "GET",
                url: "Welcome.html"
            }).then(function mySucces(response){
                $scope.myWelcome = response.data;
            },function myError(response){
                $scope.myWelcome = response.statustext;
            });
            });
*/

//OR

var myApp = angular.module("myModule", []);
myApp.controller("myController", function($scope, $http) {
    $http.get("Welcome1.html")
    .then(function(response) {
        $scope.content = response.data;
        $scope.statuscode = response.status;
        $scope.statustext = response.statusText;
    },function(response){
        $scope.content = response.data;
        $scope.statuscode = response.status;
        $scope.statustext = response.statusText;
        
    });
});