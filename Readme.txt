

All Browsers have Javascript Engine.

it is responsibily of javascript engine to convert code inside <script> into browser undertandable format

javascript engine uses syntax parser to check for javascript syntax.



---------------------------
javascript is weakly typed language.

for example:

var person can have name,interger, etc





Data types in js:
------------------
undefined,
null,
boolean,
string,
number,
object

undefined vs not defined:
------------------------

undefined means a variable has been declared 
but not assigned with any value.

for example:
var s;
console.log(s) => s is undefined

not defined means variable is neither declared 
nor  intialised with any value.

for examle:

console.log(b); => Uncaught ReferenceError: b is not defined
    at script.js:16


Type coercion	
------------
It means that a value from one type
can be converted to another on run-time.


var num=10+5;
console.log(num);====> 15
var num=10+'5';
console.log(num);====> 105. js engine convert 10 to string here this is called coercion

var num=10*'5';
console.log(num);====>50 . js engine convert 5 to number here

var num=10+5 + 'b'; ======>15b
var num= 'b'+10+5 ; ====>b105


--------
Functions in javascript

let us group a series of statement together to perform a specific task

diff between parameter and argument:


see the example:

function passExam(name,score){
    var passUni= 71;
    var passColl =51;
    if(score>passUni){
        console.log(name +'has enrolled in university with'+score+'points');
    }else if(score>=passColl){
             console.log(name + 'has enrolled in college with'+ score + 'points');
             }
    else{
        console.log(name+'has failed');
    }
    
}

passExam("Nishant",88);
passExam("Pallavi",65);
passExam("MOnty",45);

here name,score is parameter in the passExam() signature
and values like ("Nishant",88) is argument

Statement vs Expression:
-----------------------------------

expression gives value while statement doesn't

ex of function statement : 
function sum(a,b){
    console.log(a + b);
}

sum(5,10);

ex of function expression:

var sum = function(a,b){
     console.log(a + b);
}

sum(10,15);

Arrays:
---------------------
special variable which can hold more than one value at the same time

var colors =['white','black','red'];
colors[1] ='green'
console.log(colors);

//put value at end of array
colors.push('blue');
console.log(colors)

//remove value from end of array
colors.pop();
console.log(colors)

//removes item from beginning of array
colors.shift();
console.log(colors)
//add item from beginning of array
colors.unshift('purple');
console.log(colors)

console.log(colors.indexOf('red'))
console.log(colors.indexOf('black'))

if(colors.indexOf('blue')===-1){
    colors.push('blue')
console.log(colors);
}


-------------------------------

Objects:

Objects are collections of related variable and functions which are represented as name/value pairs

note: in js, almost everything is an object


Loops:
------------------------------
repeating a piece of code when a condition is true





