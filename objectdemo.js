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

//example 3 we should go for literal notation while creating object

var person ={
    firstName:'Nishant',
    lastName:'Srivastava',
    age:'28',
    gf:{name:'pallavi',age:27},
    myFunc:function(){
                 console.log('Hello world from object');
             }
             }; // js engine will create object 
console.log(person);
console.log(person.gf.name);
person.myFunc();


// Example 3:
var person ={
    firstName:'Nishant',
    lastName:'Srivastava',
    age:'28',
    gf:{name:'pallavi',age:27},
    myFunc:function(gfName,bfName,gfAge){
                 console.log(gfName + ' is gf of '+ bfName + ' and she is ' + gfAge + ' years old ');
             }
             }; // js engine will create object 
console.log(person);
console.log(person.gf.name);
person.myFunc(person.gf.name,person.firstName,person.gf.age);


// Example 4:
var person ={
    firstName:'Nishant',
    lastName:'Srivastava',
    age:'28',
    gf:{name:'pallavi',age:27},
    myFunc:function(par){
                 console.log(par.gfName + ' is gf of '+ par.bfName + ' and she is ' + par.gfAge + ' years old ');
             }
             }; // js engine will create object 
console.log(person);
console.log(person.gf.name);
person.myFunc({gfName:'Pallu',bfName:'Nishh',gfAge:27});


function createPerson(){
    var newPerson ={};
    newPerson.firstname='Bob';
    newPerson.lastName= 'Brown';
    return newPerson;
}

var person3 = createPerson();

console.log(person3)




function createPerson(firstName,lastName){
    var newPerson ={};
    newPerson.firstname=firstName;
    newPerson.lastName= lastName;
    return newPerson;
}

var person4= createPerson('Nishant','Srivatava');

console.log(person4)