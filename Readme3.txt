DOM:

cross platform and language independent model for
representing and interactng with elements in Html documents.

dom is neither part of html nor part of javascript.


var el = document.querySelector("#search-note)

el --> will be whole form object


el = document.querySelector('ul li')

--------> selects all the first li inside ul

to select 2nd li element we can use as below:

el = document.querySelector('ul li:nth-child(2)')


Adding events to DOM:
-----------------------------



var h2= document.querySelector('header h2);

h2.addEventListener('click',function()){
a(5,10);
}

function a(x,y){
console.log(x *y)
}




Event Object
----------------------------
var h2= document.querySelector('header h2);
h2.addEventListener('click',a);

function a(){
console.log(e.target);
}

Event bubbling- > seq of event getting fired from inner to outer element
 in DOM.
 
Event capturing -> seq of event getting fired from outer to inner
element in DOM.


Js engine executes all the code after that it executes events.


getAtrribute()

---------------

var div =document.querySelector('div.wrapper)

div.getAtrribute('class');
// "wrapper"


setAttribute()
------------------

div.setAttribute('style','background:coral');

div.removeAttribute('style');


example:

converting an input element into submit element:

var btn =document.getElementById('add-btn');
var input =docuemnt.getElementById('add-input);

btn.addEventListener(
'click',function(e){
e.preventDefault();
input.setAttribute('type','submit');
input.setAttribute('value',input.value);
});


DOM Navigation:-->

-------------------------------------------

Read again: 5:20 onward 

https://www.youtube.com/watch?v=wbJWUWJWlaY&t=15518s

