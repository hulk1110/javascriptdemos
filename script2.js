//console.log(a); // undefined (it is primitive data type) instead of error such as doesn't exist
//console.log(b());
//
//var a=10;
//function b(){
//    return 20;
//}
//
//console.log(a);
//console.log(b());

//example 2
if(true){
   var a=10;
   }else{
       var b=20;
   }
console.log(a);
console.log(b);

//example 3

var a=10;
var b= a;
a=20; // it won't have effect on value of b
console.log(a); // 20
console.log(b);  //10


var c= {
    
    name: 'john'
};

var d=c; // it meeans d and c point to same object
c.name ='Nick';

//so op will change in case of both references c and d
//
//result can be checked by typing window in console.
//
//now both c and d will have same value of name as nick.

var c= {
    
    name: 'nishant'
};

//now there will be two different objects