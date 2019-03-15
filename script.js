//
//console.log('hello world');
//
//var person ='instructor'
//console.log(person);
//
//person ='nishant'
//
//console.log(person);
//
//var fName='firstName',lName= 'lastName',age=28;
//
//var a;
//console.log(a);
//
//
//
//var num=10+5;
//console.log(num);
//var num=10+'5';
//console.log(num);
//var num=10*'5';
//console.log(num);
//
//
//function funName(par){
//    console.log("Hello world from function");
//}
//funName();
//
//
//function passExam(name,score){
//    var passUni= 71;
//    var passColl =51;
//    if(score>passUni){
//        console.log(name +' has enrolled in university with  '+ score + ' points ');
//    }else if(score>=passColl){
//             console.log(name + ' has enrolled in college with '+ score + ' points ');
//             }
//    else{
//        console.log(name+' has failed ');
//    }
//    
//}
//
//passExam("Nishant",88);
//passExam("Pallavi",65);
//passExam("MOnty",45);
//
//function calcScore(quizScore,essayscore){
//
//var score = quizScore +essayscore;
//   return score; 
//}
//
//passExam("Nishant",calcScore(48,38));
//
//
//function sum(a,b){
//    console.log(a + b);
//}
//
//sum(5,10);
//
////annonomus diff
//var sum = function(a,b){
//     console.log(a + b);
//}
//
//sum(10,15);
//
//// example of array literal
//var arr=['Nishh','monty','pallavi','10',true,[2,3,7]];
//console.log(arr);
//console.log(arr[1]);
//console.log(arr[5]);
//console.log(arr[5][1]);
//
//var arr2=['Nishh',
//         'monty',
//         'pallavi',
//         '10',
//         true,
//         [2,3,7]
//        ,
//        function(name){
//            return ' Hello ' + name;
//        }];
//console.log(arr2[6](arr2[2]));
//
//// array using constructor
//var arr3 = new Array('Nishh','monty','pallavi','10',true,[2,3,7]);
//console.log(arr3);


var num1= 5;
function a(){
    var num2 =10;
   //  console.log(num3 +num2 +num1); as num3 is acceable here
    function b(){
        var num3= 15;
        console.log(num3 +num2 +num1);
    }
    b();
}
a();