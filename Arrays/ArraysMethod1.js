// 1. Every ()
// It will Check the all Elements from array
let num = [1,2,3,4,5,6,7,8,9,10] ;
let flag = num.every( e => e > 11);

console.log(flag);

// 2 . some()

// Check atleast One Condition

let num1 = [ 13,15,7,3,11,17];

let fg = num1.some( value => value % 2 == 0 );

console.log(fg);

// 3. find()

let num2 = [1,2,3,4,5,6,7,8,9,10];

let f = num2.find( e => e % 2 == 0);

console.log(f);

// 4 . indexOf()

let arry = [ 'apple' , 'banana', 'Mango', 'pear', 'Butter'];

console.log(arry.indexOf('apple'));  //0
console.log(arry.indexOf('Butter')); //  4

console.log(arry.indexOf('Raja')); //-1

// 5.Last index of 
let fruits = [ 'apple' , 'banana', 'Mango', 'pear', 'Butter'];

let lstIndexOf = fruits.lastIndexOf('Mango');

console.log(lstIndexOf);

// reverse();

let animals = ['ant', 'Tiger' ,'bat' , 'cat' , 'dog' , 'Frog'];

let revAnimals = animals.reverse();

console.log(revAnimals);


//let Beforesorting = ['ant', 'Tiger' ,'bat' , 'cat' , 'dog' , 'Frog'];

let afterSorting = revAnimals.sort();

console.log(afterSorting);


// sort()

let products = [ 'macBook' ,  'imac' , 'samsung' , 'canon' , '123Test'];
let proSort = products.sort();

console.log(proSort);






