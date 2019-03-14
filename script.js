
console.log('hello world');

var person ='instructor'
console.log(person);

person ='nishant'

console.log(person);

var fName='firstName',lName= 'lastName',age=28;

var a;
console.log(a);



var num=10+5;
console.log(num);
var num=10+'5';
console.log(num);
var num=10*'5';
console.log(num);


function funName(par){
    console.log("Hello world from function");
}
funName();


function passExam(name,score){
    var passUni= 71;
    var passColl =51;
    if(score>passUni){
        console.log(name +' has enrolled in university with  '+ score + ' points ');
    }else if(score>=passColl){
             console.log(name + ' has enrolled in college with '+ score + ' points ');
             }
    else{
        console.log(name+' has failed ');
    }
    
}

passExam("Nishant",88);
passExam("Pallavi",65);
passExam("MOnty",45);

function calcScore(quizScore,essayscore){

var score = quizScore +essayscore;
   return score; 
}

passExam("Nishant",calcScore(48,38));


function sum(a,b){
    console.log(a + b);
}

sum(5,10);

//annonomus diff
var sum = function(a,b){
     console.log(a + b);
}

sum(10,15);
