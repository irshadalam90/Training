var person = function(firstName, lastName){
    this.firstName= firstName;
    this.lastName=lastName;
    }

function logit(person){
    console.log(person);
}

var Irshad = new person('Irshad', 'Alam');
logit(Irshad);
    
