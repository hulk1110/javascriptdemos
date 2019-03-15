var date= new Date();
console.log(date);


var date= new Date(" MARCH 15,2019 10:14:00");
console.log(date);


var date= new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
date.setFullYear(1990)
console.log(date.getFullYear());

var x= date.setFullYear(1990);
console.log(x);

// output=637476506871 ,millisecons after jan1,1970