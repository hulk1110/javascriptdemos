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

in creation stage all variables are set to undefined.ur code doesnt move physically.


after creation stage, starts the execution stage.






