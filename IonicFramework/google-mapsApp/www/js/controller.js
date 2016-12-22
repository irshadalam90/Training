angular.module('starter')

.controller('MapCtrl', function($scope,$state,$cordovaGeolocation, $ionicLoading, GooglePlacesService){


  // Google Places search
  $scope.search = { input: '' };
  $scope.predictions = [];

  

  // To properly init the google map with angular js
  $scope.init = function(map) {
    $scope.mymap = map;
    $scope.$apply();
  };


  $scope.map = {
  center: [39, -121],
  options: function() {
      return {
        streetViewControl: true,
        scrollwheel: true
      }
  }
};

  $scope.marker = {
  position: [
              {"lattitude":39, "longitude":-121},
              {"lattitude":41, "longitude":-122},
              {"lattitude":43, "longitude":-123},
              {"lattitude":44, "longitude":-124}
            ],
  decimals: 4,
  options: function() {
    return { draggable: true };
  }
}

/*$scope.points = {
  coords: [
    [47,-122],
    [48,-123],
    [47,-123],
    [48,-122]
  ],
  options: function(coords, properties, i, map) {
    return {
      draggable: true
    }
  },
  events: {
    click: function(e, point, map, points) {
      alert(point)
    }
  },
  decimals: 3
};*/


 

$scope.tryGeoLocation=function(){
    $ionicLoading.show({
      template: 'Getting Current position...'
    });

     
  $scope.search.input = "";

  $cordovaGeolocation.getCurrentPosition({
    timeout: 1000,
    enableHighAccuracy: true
  }).then(function(position){
    $ionicLoading.hide().then(function(){
      $scope.latitude = position.coords.latitude;
      $scope.longitude = position.coords.longitude;

      
    });


  });
};

$scope.getPlacePredictions = function(query){
    if(query !== "")
    {
      GooglePlacesService.getPlacePredictions(query)
      .then(function(predictions){
        $scope.predictions = predictions;
      });
    }else{
      $scope.predictions = [];
    }
  };


  

});

