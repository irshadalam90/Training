var app = angular.module("ngRootApp", ["ngRoute"])
                 .config(function($routeProvider){
                    $routeProvider
                    .when("/", {
                          templateUrl : "HtmlPages/home.html",
                          controller : "HomeCtrl"
                          })
                    
                        .when("/about",{
                        templateUrl: "HtmlPages/about.html",
                        controller : "AboutCtrl"
                    })
                    .when("/contact",{
                        templateUrl : "HtmlPages/contact.html",
                        controller : "ContactCtrl"
                    });
                });

app.controller("MainCtrl", function ($scope) {
    $scope.msg = "I am in Main Page";
});

app.controller("HomeCtrl", function ($scope) {
    $scope.msg = "I am in Home Page";
});

app.controller("AboutCtrl", function ($scope) {
    $scope.msg = "I am in About Page";
});

app.controller("ContactCtrl", function ($scope) {
    $scope.msg = "I am in Contact Page";
});