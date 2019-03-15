function digitalClock(){
    
    var date= new Date();
    
    var hr= date.getHours().length< 2 ? '0'+ date.getHours() : date.getHours();
    var min =date.getMinutes().length<2 ? '0'+ date.getMinutes() : date.getMinutes();
    var sec= date.getSeconds().length<2 ? '0'+ date.getSeconds(): date.getSeconds();
    
    var weekdays =['sun','mon', 'tue','wed','thu','fri','sat']
    var clck = weekdays[date.getDay()] + ' '+ hr + ':' + min +':'+ sec;
    console.log(clck);
    
    document.getElementById("clock").innerHTML=clck;
}

digitalClock();

setInterval(digitalClock,1000);


// note:find out why 0 is not getting appended in final display