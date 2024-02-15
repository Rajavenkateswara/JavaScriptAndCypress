

let s = "Welcome";
/*
let name = new String();

name = "Raja";
name = "Vankateswarlu"

console.log(name);
console.log(s);
*/
//charAt()
/*
console.log(s.charAt(0));
console.log(s.charAt(1));
console.log(s.charAt(2));
console.log(s.length);

//concat()

console.log(s.concat(" To Java Script learning"));
console.log(s.concat("  Selenium WebDriver").concat("Cypress with java Script"));

//Replace

 s = "Welcome to cypress";
 console.log(s);

 console.log(s.replace("cypress" , "Selenium"));

 //SubString()
 console.log(s.length);

 console.log(s.substring(11,18));  // cypress

 console.log(s.substring(0,7));// welcome
  
 // toLowerCase() & toUpperCase()

 s = "Raja venkateswarlu";

 console.log(s.toLowerCase());
 console.log(s.toUpperCase());

 */

 //Split();
 const s1 ="Welcome to java";

   let  arr =  s.split(" ");

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[3]);

////Trim()

let schoolName = "  Sree Surya vidyanikethan";

console.log(schoolName);

console.log(schoolName.trim());

// Numbers
 let x =100;
 
let y = new Number(300);
y = 500;
console.log(x+y);

let num1 = 100;  // Integer value 
let num2 = 120.5; // decimal value
let num3 = 20e2; // exponecial value

console.log(num1,num2 ,num3);

//isInteger()

x = 10;
y = 20.5;
z  = "x";

console.log(Number.isInteger(x));  // true

console.log(Number.isInteger(y)); // false
console.log(Number.isInteger(z)); // false

// parsenInt() => convert String into Number

let a = "3450";
let b = "3500";
 
let a1 = Number.parseInt(a);
let a2 = Number.parseInt(b);
console.log(a1 + a2);

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(a1));
console.log(typeof(a2));

//parasefloat() 

let k = "200.6";
let l = "300.6";

console.log(typeof(k) + " "+ typeof(l));
console.log("Result " + (Number.parseFloat(k) + Number.parseFloat(l)));
console.log(typeof(Number.parseFloat(k) ) + " "+ typeof(Number.parseFloat(l) ));


//toString()

//let n = 1234;

let n = 123.60;

console.log(typeof(n));  //Number()

// console.log(Number.toString(n));

console.log(typeof(Number.toString(n))); // String








