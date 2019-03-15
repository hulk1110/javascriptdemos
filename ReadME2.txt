Hoisting: (refer script2.js)

videos between 3:20-3:25
console.log(a); // undefined (it is primitive data type) instead of error such as doesn't exist
console.log(b());

var a=10;
function b(){
    return 20;
}

console.log(a);
console.log(b());

in creation phase , js engine assign value of undefined to all the variable.
but its not same in case of function.

In creation stage variables and function declarations
 are put into memory space.

in creation stage all variables are set to undefined.
ur code doesnt move physically.


after creation stage, starts the execution stage.

note : to avoid error declare all the variables

at begining of every scope and call function expression after their declarations.


object vs primitives
--------------------------------


This
---------------------------
after video 3:36

is global execution context.

this === window (this point to global window object) 


using this inside a function means it 
points to currently mentioned object(as it points to local execution context).

// this always refers global window object


var per = {
    
    fName:'Nishant',
    lName:'Sriavsatava',
    getFullName:function(){
        console.log(this === per); // true so we can write like return this.fName + ' ' +this.lName; 
        // return per.fName + ' ' +per.lName;
        console.log(per.fName + ' ' +per.lName);
        console.log(this.fName + ' ' +this.lName);
        function greet(){
            console.log('Hi ' + this.fName); 
            
//             op will be  Hi undefined (this always point to global variable)
        }
        greet();
    }
}
per.getFullName();

// so how to get the output?


var per1 = {
    
    fName:'Nishant',
    lName:'Sriavsatava',
    getFullName:function(){
        var that= this;
        console.log(this === per); // true so we can write like return this.fName + ' ' +this.lName; 
        // return per.fName + ' ' +per.lName;
        console.log(per1.fName + ' ' +per1.lName);
        console.log(this.fName + ' ' +this.lName);
        function greet(){
            console.log('Hi ' + that.fName); 
            
//             op will be  Hi undefined (this always point to global variable)
        }
        greet();
    }
}
per1.getFullName();


