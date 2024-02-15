let emptyArray = []

/*

let lan = ["Java" ,"Python" , "js"];

//1. push method 
// Added one or more at end of element

lan.push("C##");
lan.push("Ruby" , "CSS" ,"HTML");
console.log(lan);

// 2. pop 
// Remove the last Element from array
let number = [1,2,3,4,5,6,7,8]; // An Array with numbers
console.log( number);
console.log(number.pop()); // Return removing element
console.log( number);

//3 shift ()
//remove first and return
let frits = ["Apple" ,"Banna","orange"] //// Array with string

let first = frits.shift();
console.log(first);
console.log(frits);

//4 unshift()
// add the element at starting and shifting occurs

let colour = ['red' , 'black', 'white'];

console.log(colour.length);

colour.unshift('Bule');
colour.unshift('Gold' ,'Green', 'maroon');

console.log(colour.length);

// 5 splice

// It will allow to add  or remove element from specific index from array

let animals = ['dog' , 'cat' , 'Bird' , 'Fish'];
//animals.splice(1,1,'Bear');
animals.splice(1,2,'Bear' ,'Elephent'); // Deleting two elements
console.log(animals);


// 6 slice

let pop = [1,2,3,4,5,6,7];
let newpop = pop.slice(1,5); // [1]
console.log(newpop);

// 7 concat

let fr = ['apple' ,'banna'];
let num = [1,2,3,4];

let newfrNum = fr.concat(num);
console.log(newfrNum);
*/
//8 indexOf();

let colours = ['red' , 'black', 'white' , 'red'];
console.log(colours.indexOf('red'));
console.log(colours.indexOf('black'));

console.log(colours.indexOf('Raja')); // -1 not avaible

console.log(colours.indexOf('red',2));

console.log(colours.indexOf('red', colours.indexOf('red')+1));


// 9 include()

let test = ['Admin' , 'Customer' , 'Seller','Buyer'];

console.log(test.includes('Admin'));
console.log(test.includes('Customer','Seller'));

// 10 forEach();

let n = [1,2,3,4,5,6,7];
n.forEach((e) => {
    console.log(e + 2);
})

// 11.











