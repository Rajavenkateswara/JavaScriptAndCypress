
//1.find the unique elements from the array

const arr = [1,2,3,4,2,3,1,2,3,2,3,5,6,7,8,9,9,9,10,10];

// ... spread operator;

const unique = [... new Set(arr)];

console.log(unique);

//2 . convert inetger to string

const num = 20;
const numStr = num + '';
console.log(typeof numStr ); // String 2010

console.log(numStr + 10);
console.log(typeof num ); // number 

console.log(num + 10); //30

       // or

       const n = 300;

       const conN = String(n);
       console.log(typeof conN);
       console.log(typeof n);


// 3 .  Convert float to integer

const floatNum = 3.76 ;

console.log(floatNum);

const intNum = parseInt(floatNum);

console.log(intNum);

// 4 - Check if variable is  a Number 

//const value = 23;

//const  value = '123';

const value = true;

if(typeof value === 'Number' &&  ! isNaN(value)){
       console.log("Found Number Type " + value);
}else  if(typeof value === 'string'){
       console.log("Give variable is Sting Type " + value)
}else {
       console.log("Variable type is Boolean True or false   " + value);
}


// 5 -  Swap Two numbers

let  i = 10;
let j = 20;
[i , j] = [j , i];

console.log( `${i} , ${j}`);

console.log( i , j);

// 6 . Check if an Object has a property

const person = {
     //  name : ' Raja',
      // age : '28',
      number : '12344354'
}

if(person.hasOwnProperty('name')){
       console.log("Name has foud" + person.name);
}else if(person .hasOwnProperty('age')){
       console.log("Age is = " + person.age);
}else {
       console.log("Property Not present in Object : ");
}



// 7 - Remope falsy values form the array 

const values = [0,1,false,2, '' ,3,5,6,7,null, undefined,NaN,19,13];

const uniqueValues = values.filter(Boolean);

console.log("After Removeing the falsy values from list : " + uniqueValues);


// 8-  String UpperCase to LowerCase;

const name = 'RajaVenkateswarlu';
const surName = 'KARRAVULA';

console.log(name.toUpperCase());
console.log(surName.toLowerCase());


// 9- Check array contains a Value or not

const programming = ['java' , 'C#' , 'Python' , '.Net' , 'Rubby', 'ApexProgramming'];

let status = programming.includes('java1');

console.log(status);

if(programming.includes('C#1')){
       console.log('Value Found in List');
}


// 10 -Check the Array is Empty or Not

const empty = [12,3,4,];

if(empty.length === 0){
       console.log("Array is empty values :  " + empty.length);
}else{
    console.log("Array contains some values " + empty  + '  Length of the array is : ' + empty.length);
}


//11 generate random numbers in Limited Range

const min  = 10 ;
const max  = 20;

const randomNumber = Math.floor(Math.random() *  (max - min + 1)) + min;

console.log(`RandomNumber is  ${randomNumber}`);


//12. String to Number

const Str = '12345';
 console.log(typeof Str);
const strNum = parseInt(Str);

console.log(typeof strNum + " " + strNum);


const StrNum1 = parseFloat(Str);

console.log(typeof StrNum1 + ' ' + StrNum1);


//13. Join the Array Elements into a String

const words = ['Hello' , 'Raja venkateswarlu' , 'Welcome to Java'];

console.log(words);

//const sentence = words.join(' ');
const sentence = words.join( );
console.log(sentence);

// 14 .Get Object Property

const emp = {

       empName : 'RajaVenkat',
       empID : '123',
       Organization : ' Wipro',
       Location : 'Hyd'

}

console.log(emp ['empName']);
console.log(emp ['empID']);
console.log(emp ['Location']);


// 15 Clone the Array  

const numbers = [1,2,3,4,5,6,6,7,8,10,12,];

console.log(numbers);

const newNumbers = [...numbers];

console.log(newNumbers);


// 16 Clone the Object

const students = {
       name : 'Raja ',
       RollNumber : '15ju1z0319',
       Branch : 'Mech',
       CollegeName : 'KITS'
}

console.log(students);

 const studentsClone = {...students};

 console.log(studentsClone);


 //17 Convert Object into Array

 const obj = {
       name : 'venky',
       number : '9000283171',
       height : '5.3',
       Weight : '50 kg'
 }

 console.log( obj);

 //Get the key from the Object

 const arrayKeys = Object.keys(obj);

 console.log(arrayKeys);
 // Get the values from Object

 const arrayVlues = Object.values(obj);

 console.log(arrayVlues);

 // Getting the Key  - values from the Object

 const arrayObject = Object.entries(obj);

 console.log(arrayObject);


 // Getting the current Date and Time

 const currentDate = new Date();

 console.log(currentDate);

 console.log(currentDate.toLocaleString());

 // Check variable is Defined or Not

 let m  = 0;

 if(typeof m === 'undefined'){
       console.log('Variable is not defined')
 }else {
       console.log('varible is defined');
 }

 // 19  Truncate an array

 const testing  = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

 //testing.length = 6;
 console.log(testing);

 // 20 Last item in the Array
 console.log(testing.length - 1);

const lstValue = testing.slice(-1);
console.log(lstValue);

console.log(`Second last Number from list ${testing.shift(-2)}`);








