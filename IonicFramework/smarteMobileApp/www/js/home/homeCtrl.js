angular.module('smarte')
.controller('homeCtrl',['$state','$interval',function($state,$interval){
	var vm = this;
	//vm.locationNotFound = false;
	function startprogress() {
    
    vm.progressval = 10;
    car = document.getElementById('car');
    if (vm.stopinterval) {
      $interval.cancel(vm.stopinterval);
    }

    vm.stopinterval = $interval(function() {
      if(vm.progressval < 100) {
        vm.progressval = vm.progressval + 1;
        if(car){
          car.style.marginLeft = vm.progressval - 10 + '%';
        } else {
          $interval.cancel(vm.stopinterval);
        }
      } 
    }, 30);
  }
	startprogress();
}]);