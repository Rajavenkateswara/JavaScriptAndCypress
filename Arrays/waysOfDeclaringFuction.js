/* Anonymous Function

Recursive Function

 Higher Order function 

 Function Declartion 

 Function Expression 

 Arrow Function Expression

  Function Constructors

  IIFE( Immediatly Invoked Fuction Expreesion )

  Generator Function


*/
/*

 // 1. function declaration :

 function add ( a, b){
    return a + b ;
 }
 console.log(add(10 , 12));

 function sub( a , b){
    return a - b ;

 }

 function mul ( a , b){
    return a * b;
 }

 function divisors( a, b){
    return a / b ; 
 }

 function remainder (a, b){
    return a % b ;
 }

 console.log("Addition of Two numbers" + add(12,12));
 console.log("Multiplication of Two Numbers " + mul(2,24));
 console.log("Sum of two numbers " + sub(4,8));
 console.log(divisors( 4,2));
 console.log(remainder(4,2));

 */

 //2 .function Expression : Annonymous function

 console.log(".function Expression : Annonymous function");

 const add = function ( x , y){
    return x +y;
 }

 console.log(add(11 ,200))

 const sub = function ( x , y){
    return x - y ;
 }
 console.log(sub(60,40));


 const mul = function ( x , y ){
    return x * y;
 }

 console.log(mul(2,6));


 // Arrow Function Expression  :  Annonymus fuction
 console.log("Arrow Function Expression  :  Annonymus fuction");
 const divisors = ( t1, t2 ) => t1 / t2 ;

const addition =  (t1,t2) => (t2 + t2);

const Multiplication = ( t1 , t2 ) => t1 * t2;

const substration = ( t1  , t2 ) => t2 - t2 ;

console.log(divisors(10,2));
console.log(addition(12,13));
console.log(Multiplication(2,4));
console.log(substration(10 , 5));


// 4 function Constructore

console.log("4. Function Constructor");

const diff  = new Function ( 'a' , 'b' , 'return a - b ;');

console.log(diff(20,10));


const sumOfThreeNumbers = new Function( 'a' , 'b' , 'c' , 'return a + b + c ');

console.log("Sum of the Three numbers  " + sumOfThreeNumbers(12,12,12));


console.log( "5 IIFE( Immediatly Invoked Fuction Expreesion )");


( function (){
    console.log("Server is Running  up and Down ");
})();


console.log( " 6- Generator Function ");

function* generateNumberSequence(){
    yield 1 ;
    yield 2 ;
    yield 3 ;
    yield 4 ;
    yield 5 ;
    yield 6 ;
    yield 7 ;

}

const generator = generateNumberSequence();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);


console.log( " 7 - Annonymous Function :-  no Specific Name ");

const number = [1,2,3,4,5,6,7,8,9,10,11];

// const squareOfNumber = number.map(e => e * e );

const sqrtNumber = number.map(function(e) {
   return e * e;
} )

//console.log(squareOfNumber);

console.log(sqrtNumber);


// 8 - Recurssive Function
console.log("Recursive Fumction");

function factorial( n ){

   if( n == 1 || n== 0){
      return 1;
   }else 
      return n * factorial(n-1);

}

console.log(factorial(12));
console.log(factorial(3));
console.log(factorial(6));


// 9 -High order Function
 console.log("High Order Function");
function addition1(a, b){

   return a + b;

}

function mixing ( a,b){
   return a * b ;
}

function operate (functionName ,a ,b ){
   return functionName(a ,b);
}

const s = operate( addition1 ,  12,14);
console.log(s);


const m = operate(mixing , 2,4);
console.log(m);


function action( operation , x, y,z){
   return operation( x,y,z);

}


