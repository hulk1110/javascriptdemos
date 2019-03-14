var scoreOfJohn=49;
var scoreOfNick=45;

var pass=51;

if(scoreOfJohn >=pass && scoreOfNick>=pass)
{
    console.log("Both student pass");
}


else if(scoreOfJohn >=pass || scoreOfNick>=pass)
{
    console.log("one of student has passed");
    
    if(scoreOfJohn>scoreOfNick){
        console.log('and it is jon with'+scoreOfJohn+ 'points');
    }else{
        console.log('and it is Nick with'+scoreOfNick+ 'points');
    }
}else{
    console.log("Both of them failed");
}