var person= new Object();
var job= 'profession';
person.firstName ='Nishant';
person['lastName'] ='Srivastava';
person['job'] ='developer';
console.log(person);
console.log(person.firstName);
console.log(person['lastName']);

//example 2

var person= new Object();
person.firstName ='Nishant';
person.lastName ='Srivatava';
person.gf= new Object();

person.gf.name="Pallavi";
person.gf.age="27";
console.log(person);