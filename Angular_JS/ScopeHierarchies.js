var myApp = angular.module("myModule",[])
                    .controller("GreetController",["$scope", "$rootScope", function($scope,$rootScope){
                        $scope.name="World";
                        $rootScope.department="Angular";
                    }])
                    myApp.controller("listController", ["$scope", function($scope){
                        $scope.names=["a","b","c"];
                    }]);
                                

/*var myApp = angular.module("myModule",[]);

myApp.controller("myController",["$rootScope", function($rootScope){
    $rootScope.name = "This is Parent controller";
    
    }]);
             

myApp.controller("myController1",["$scope", function($scope){
    $scope.name1 = "This is child controller1";
    }]);
                                  
myApp.controller("myController2",["$scope", function($scope){
    $scope.name2 = "This is child controller2";
    }]);*/