
// Repeation  the WebElements
//for -loop
/*
for(let i = 1; i<=20 ; i++){
    if( i % 2 == 0){
        console.log( "Even :  " + i);
    }else if( i % 5 == 0)
    console.log("Multiples of 5 : " + i);
    else if(i % 2 != 0)
    console.log( "Odd Number " + i);
    
} 

// for...of loops

const array = [1,2,3,4,5,6,7,8,9,10,1000];

for(const num of array){
    console.log(num)
}

// 
for(let i = 0 ; i< array.length; i++){
    console.log(array[i]);
}
*/

console.log("******* While loop ***");
/*
function loopDemo(let p){

    while(p <=10){
        console.loe(p);
        p++;
    }

}
loopDemo(1);
*/
/*
let p =1;
while( p <= 10){
    console.log(p);
   // p++;
   //++p;
   p = p+1;
}

// 
let l =2;
while(l <= 100){
    console.log(l);
    l = l+2;
}

//Do while loop
// Executing atleast once

// checking the element in webpage atleast oncec
let h =10;
do{
    console.log(h);
    h--;
}while(h > 1);
*/
// break;
// come out of the loop 

// 1 to 100; print the hi when you see multiplication of 5
 /*
let num =1;

while( num <= 100){
    //console.log(num);
    if(num % 5 == 0){ // % remainder 0 % 5 == 0 always 0
        console.log("Hi Raja  " + num);
        //break;
        
    }
    
    num++;

}
*/
/*
console.log("*******************")
const browser = ["Chrome" , "Firefox" ,"Edge" , "Safari" ,"IE"];

for(const e of browser){
    if( e == "Edge"){
        console.log("Launch Edge " + e);
        break;

    }
   
}
*/

// for .. of loop on object

const user = {
    name : "Taja",
    rollnumber : "15JU1AO319",
    AGE : 28,
    CITY : "DORNALA" 
}
 console.log(user.name);
 console.log(user["AGE"]);

for(const key in user){
    console.log(key);
    console.log(user[key]);
    console.log(key + " " + user[key]);
}


const browser = ["Chrome" , "Firefox" ,"Edge" , "Safari" ,"IE"];

for(const ele in browser){
    // printing indexes
    //console.log(ele);
    //
    console.log( ele + "  " +browser[ele]);
}






