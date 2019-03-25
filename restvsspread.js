//rest demo

//usage  1.collects all remaining elements into an array.

function add(... args){
    let result =0;
    for (let arg of args){
        result += arg;
    }
    return result
    
}

console.log(add(1));
console.log(add(1,2))
console.log(add(1,2,3,4));
//
//Note: Rest parameters have to be at the last argument. This is because it collects all remaining/ excess arguments into an array. So having a function definition like this does not make sense and it errors out. :



// spread operator

//The spread operator allows us to expand elements. With rest parameters we were able to get a list of arguments into an array. spread operators however, let us unpack elements in an array to single/individual arguments.

// usage1 adding array elements to an existing array


const arr =["sukhi","baba"];
const frnds = ["monty", ...arr]

console.log(frnds);

//  Note: Unlike rest parameters we can use the spread operator as the first argument.

const frnds2 =[...frnds,"pallavi","pandey"]
console.log(frnds2)



// usage:---->We can use the spread operator to copy an array.

const arr2 =[1,2,3];
const arr3 =[... arr];

console.log(arr3)


//usage:--->Pass elements of an array to a function as separate arguments

function add (a,b,c){
    return a+b+c;
}

const args=[1,2,3];


console.log(add(...args));