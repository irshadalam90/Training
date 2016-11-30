angular.module("myApp", [])
  .component("helloWorld",{
    templateUrl: 'Component_Template.html',
    bindings:{name:'@'},
    controller: function(){
        this.myName='Alam';    
    }
  });