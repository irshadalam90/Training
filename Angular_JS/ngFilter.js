var myApp = angular
                .module("myModule",[])
                .controller("myController", function($scope){
                    
                    var employees = [
                        {name: "Raman", dateOfBirth: new Date("November 23, 1990"), gender: "Male", salary: 20000},
                        {name: "Shayam", dateOfBirth: new Date("October 21, 1993"), gender: "Male", salary: 21000},
                        {name: "Radhika", dateOfBirth: new Date("April 11, 1990"), gender: "Female", salary: 15000},
                        {name: "Shaumya", dateOfBirth: new Date("August 23, 1991"), gender: "Female", salary: 25000},
                        {name: "Sanjay", dateOfBirth: new Date("September 12, 1990"), gender: "Male", salary: 30000}
                    ];
        
                        $scope.employees = employees;
                });
