/*
// Mutiple lines 
let x; // Declaration
x= 100; // Initilization
console.log(x);

//Single Statement Declaration and Initilization

let a =100;
console.log("A value  " + a);

//document.write(100);

//Single statement -Multiple Variables

let x1 =100,x2 = 200,y = 100;
console.log("Value of x1 " + x1 + " Value of x2 " + x2 + "Value of " + y);

/*
We can not acces the let variables before declaration

We can access the Var variable before declaration

var can be Re-Declared ,re-initialized
let can be re - initialized not re-declared;
let - Block scope
var - function scope

default value of var = underdefind
le also underdefind




// let - Block Scope

//let i ;
//console.log(i);
let i=100;
console.log(i);

var k ;
console.log("Var variable before declaration" + typeof(k));
k = 200;
console.log("var variable after declaration " + k);

*/
// Multiple line declaration and initilization

document.write("<h2> Welcome to Varibales AND Data Types</h2>");

document.write("<p> Primitive data Types are : Number ,String ,Boolean , NUll ,Underdefind :</p>");

document.write("<p> Non- primitive dataTypes are :  Object , Array, Date ,Regx </p>");

document.write("Difference between let - Block scope and var- function scope");

document.write(
    "<p> let x ; </p>",
    "<p> x =100 </p>",
    "<p> we cant access the x ;",
    "<p> var y ; ",
    "<p> var = 100 ; ",
    "<p> We can access the varibales y",
    " <p>We can't access the x - value before declaration - let and We can acces the x -value before declaraion</p>"
    );
    /*

let name = "rajaVenkateswarlu";

let lastName = "Karravula";
console.log( name + lastName);

let x,y,z;
x = "selenium";
y = "Cypress";
z = "core-java";

console.log(x + " " + y + " " + z);


let k = "Welcome Java-Script Learning"; 
*/

//console.log(k);

// Difference Between var and let

//console.log(x);
/*
//var x = 100;
let x =100;
console.log(x);
*/
// Constant *************

const y = 200;
const x =300;

document.write("<p> constant values of y is "+y+"+"+x+"  </p>");

//y = 300;
//document.write("<p> constant values of y is "+y+"  ");
 document.write("<h1> Data Types : -</h1>");

 let a = 200;
 let name  = "Teja";
 let status = true;
 let data = null;
 let b ;
 let cost = 120.50;

 let value = undefined;

 document.write(" <p> Data -Type of a  "+typeof(a)+"</p>");  // number
 document.write(" <p> Data -Type of name  " + typeof(name)+"</p>"); //string
 document.write(" <p> Data -Type of status  " +typeof(status) +"</p>"); //boolean
document.write(" <p> Data -Type of data " + typeof(data)+"</p>"); // Object
document.write(" <p> Data -Type of b  " + typeof(b)+"</p>"); // undefined
document.write(" <p> Data -Type of cost  " + typeof(cost)+"</p>"); // Number
document.write(" <p> Data -Type of value " + typeof(value)+"</p>"); // underdefind










