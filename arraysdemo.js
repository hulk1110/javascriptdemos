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


colors.forEach(function(color,index,arr){
    console.log(color,index,arr);
});



// colors.classList.add();
//colors.classList.toggle();

var arr = [1,2,3];

arr[3] =4;

arr.prop='Hello';
console.log(arr);
