console.log(a); // undefined (it is primitive data type) instead of error such as doesn't exist
console.log(b());

var a=10;
function b(){
    return 20;
}

console.log(a);
console.log(b());

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


function afunc(){
    console.log(this); // op will be window
    console.log(this === window); // true
    
    function bfunc(){
        console.log(this);
        console.log(this === window);
    }
    bfunc();
    }

afunc();


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