var app = angular
            .module("myModule", [])
            .controller("myController", function($scope,stringService){
                    $scope.transFormString = function(input){
                        $scope.output = stringService.processString(input);    
                    }
                 )};
