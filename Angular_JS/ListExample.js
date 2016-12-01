var app= angular.module("myApp",[])
                .controller("myController", function($scope){
                     
                  
                    $scope.nameList=["Irshad","Rohan","Rakesh","Mohit"];
                    $scope.addName= function(){
                    
                     $scope.nameList.push($scope.name);
                     $scope.name=''; 
                    }     
                    
                    $scope.removeName= function(index){
                        $scope.nameList.splice(index,1);
                    }
                });