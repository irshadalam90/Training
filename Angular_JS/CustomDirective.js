angular.module('docsSimpleDirective', [])
        .controller('Controller', ['$scope', function($scope) {
        $scope.customer = {
        name: 'Irshad',
        address: 'Sector 18 Gurgaon'
        };
        }])

        .directive('myCustomer',function(){
        return{
            templateUrl: 'my-customer.html'
                    
        };
});