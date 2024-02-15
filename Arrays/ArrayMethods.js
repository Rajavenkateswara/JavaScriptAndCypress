fruits = ["Bananna", "Apple", "Orange","Grapes","Lemeon"]

console,console.log(fruits);

//Convert Array into String by uisng toString() -function

console.log(fruits.toString()); //  Bananna,Apple,Orange,Grapes,Lemeon

// Elements join by using Specail characters

console.log(fruits.join("***")); //  Bananna***Apple***Orange***Grapes***Lemeon

//pop() ;
// Remove the last Element from the Array

console.log(fruits.pop());  // Return the delete Element from Array ->Lemeopn

console.log(fruits); //[ 'Bananna', 'Apple', 'Orange', 'Grapes' ]


//push()  => Add new Element to the END 

console.log(fruits.push("Kiwi"));  // Return length of new Array - 5
console.log(fruits.push("Watermelon")) // length -6
console.log(fruits.push("Avacado")) //  length - 7
console.log(fruits);

// shift() => Remove first Element from Array and Shilft Another Elements to Lower Index

animals = ["ant" , "bat" , "cat" , "Dog" , "Elephent" , "Fog" , "Goat"];

console.log("Before Shift() " + animals);

console.log(animals.shift()); // Retrun the Removed Element from LIST

console.log("After shitf() " + animals);

//unshift()  => Add New Element to first place return new Length

console.log(animals.unshift("Tiger"));

console.log("After unshitf() " + animals);

//Deleting the Elements from Array

delete animals[2];
delete animals[0];

console.log("After Deleting " + animals);

// concat() -> joining /merging 2 or more arrays

subjects = ["Telugu" ,"Hindi" , "English" ,"Maths" ,"Science" , "Physics" ,"Biology"];
marks = [70,78,98,12,34,56,32,67,55];
console.log("Subjects list " + subjects);
console.log("Marks " + marks);

console.log(subjects.concat(marks));

ratings = ['high' , 'Medium' ,'Low']

console.log(subjects.concat(marks,ratings));

subjects1 = ["Telugu" ,"Hindi" , "English" ,"Maths" ,"Science" , "Physics" ,"Biology"];

//Slice(passindex)

console.log(subjects1.slice(3));

console.log(subjects1.slice(6));

//sort()

console.log(subjects1.sort())

let number = [20,40,25,15,5,4,10,45,35,60,90,65];

console.log(number.sort());

let num = [100,300, 200,600,150]

console.log(num.sort());

console.log(num.reverse());
console.log(subjects.reverse());

