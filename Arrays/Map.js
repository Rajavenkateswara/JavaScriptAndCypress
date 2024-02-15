// 1. map
let number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

/*
number.map( (e) => {
    console.log(e * 2);
})
*/
let multiplrOfTwo = number.map( (n) => n *2);
console.log(multiplrOfTwo);

number.map( (n) => {
    if(n % 2 == 0){
      console.log(n);
    }
});

// F -> c

function farToCel(fah){
    return (fah - 32) * (5/9);
}

let fahTemp = [36 ,68,42,58,99];

let celTemp = fahTemp.map(farToCel);

console.log(celTemp);

number.map( (n) => {
    if(n % 2 !=0 ){
        console.log(n);
    }
})







