
/*
let cars = ["Honda" , "BMW" , "SKODA", "TAYOTA" ,"KIA" , "SUZIKI","TATA" ,"VOKSWAGAN" , "BENZ", " spender"];

let animals  = new Array( "Cat" , "dog" , " Elepahant","tiger" , "Lion");

console .log("Detailas about Vehicals ");
console.log("Number of vehicals in list " + cars.length);

console.log(cars);

console.log("Details about animals")

console.log("Number of animals  " + animals.length);

console.log(animals);

// Accesing the element from animals

console.log(animals[0]);

// Accessing the element from Vehicals

console.log(cars[9]);

 //update the list

 cars[0] = "Sccoty";
 animals[0] = "Horse";

 console.log("after adding New element to list of animals  " + animals.length);

 

 console.log("After adding New  of vehicals in list " + cars.length);

 console.log(cars);

 console.log(animals);

 */


 //We can have Variables of different  Types in same array

 let myArray = [60000 , "Raja" ,8.5, true, null ];
 console.log(myArray.length);

 console.log(myArray);
 console.log(myArray[4]);
 console.log(myArray[3]);
 console.log(myArray[2]);
 console.log(myArray[1]);
 console.log(myArray[0]);

 console.log("We have Multiple objets in Array")
 
 let person1 = {

    name : "Srikanth",
    age : 25,
    LastName : "Yeruva"
 };
 let person2 = {
    name : "Hari",
    age : 30,
    LastName : "Suddula"

 };
 let person3 = {
    name : "Goverdhan Reddy",
    age : 29,
    LastName : "Karnati"

 };


 let myArray1 = [

    person1,person2,person3

 ];

 console.log(myArray1);
 console.log(myArray1[1]);


let fruits = [ "apple" ,"Bananna" ,"Mango" , "Avacado", "Grapes"  ]

console.log("Number of fruits in list " + fruits.length)

// Retriving the elements from list

console.log("Using for loop ")

for(let i = 0 ;i< fruits.length ; i++){

    console.log(fruits[i]);


}
console.log("USING THE FOR - OF - LOOP");

for(let fruit of fruits){

    console.log(fruit);
}


// Recognize an Array -- TypeOf

 re = typeof fruits ; //ReturnType is  object
 console.log(re);

 //Checking the array or not

 console.log(Array.isArray(fruits));

  flag =Array.isArray(myArray1);
  console.log(flag);

  flag1=Array.isArray(person1);
  console.log(flag1);