angular.module("myApp", [])
  .component("helloWorld",{
    templateUrl: 'Component_Template.html',
    bindings:{name:'@',email:'@',mobile:'@'},
    controller: function(){
        this.name=name;    
        this.email=email; 
        this.mobile=mobile; 
    }
  });