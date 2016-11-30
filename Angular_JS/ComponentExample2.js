

angular.module('heroApp', []).controller('MainCtrl', function MainCtrl() {
  this.hero = {
    name: 'Spawn'
  };
})
        .component('heroDetail', {
        templateUrl: 'ComponentTemplateExmpl2.html',
        controller: function(){
    },
        bindings: {
        hero: '='
        }
    });


