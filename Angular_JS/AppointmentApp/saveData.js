var app = angular.module("sampleApp", ["firebase"]);





/*
app.controller("ProfileCtrl", ["$scope", "$firebaseObject",
  function($scope, $firebaseObject) {
    // put our profile in the scope for use in DOM
    //$scope.profile = Profile("physicsmarie");
      var ref = firebase.database().ref();
      $scope.profile = $firebaseObject(ref.child('Users'));

    // calling $save() on the synchronized object syncs all data back to our database
    $scope.saveProfile = function() {
      $scope.profile.$save().then(function() {
        alert('Profile saved!');
      }).catch(function(error) {
        alert('Error!');
      });
    };
  }
]);
*/















/*
app.controller("MyCtrl", ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {
    var ref = firebase.database().ref();
    //var listRef = ref.child("Users")  
    var list = $firebaseArray(ref);

    // add an item
    list.$add({ name: "sanjay"}).then(function(){
        //var id= ref.key;
        console.log("added record with id ");
          //list.$indexFor(id); // returns location in the array
    }).catch(function(error){
        console.log(error);
    });

    // remove an item
     // var item = list[3];
      
    /*list.$remove(item).then(function(ref){
        ref.key === item.$id;
    }).catch(function(error){
        console.log(Error);
    });*/
    // make the list available in the DOM
    //$scope.list = list;
//   }
// ]);

 
