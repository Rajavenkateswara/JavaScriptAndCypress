//let num = [2,3,4,5,6,,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let num = [2,4,7]; // 13
let sum = num.reduce((acc , num) => acc + num , 0);

// 1st 0 + 2
//2nd 2 + 4
//3rd 6 + 7

console.log(sum);

let array = [ 2,4,6,9,12,7,13,14,13,23];

let prinArray = array.map((array) => array);
console.log(prinArray);

let ArrayGreaterThan10 = array.map((array) => array).filter((array) => array > 10);

console.log(ArrayGreaterThan10);

let array1 = [ 2,4,6,9,12,7,13,14,55,66,77,88,13,23];

console.log(array1[0]);

let maxNum = array1.reduce((max ,num) => {
    if(num > max){
        return num;
    }else{
        return max;
    }
}, array1[0]);

console.log(maxNum);



// cartItem name , Price
let cartItems = [
    { name : 'Shirt' ,price : 200},
    { name : 'Books' ,price : 250},
    { name : 'Grocery' ,price : 216},
    { name : 'Beauty' ,price : 200},
    { name : 'Tv' ,price : 230},
    { name : 'Phone' ,price : 220},

]

let TotalCost = cartItems.reduce((total , Item) => total + Item.price , 0);

console.log(TotalCost);

let arr = [12,13,16,14,10,9,1,2,-1];

let minNumber = arr.reduce((mini , num) => {
    if(mini < num){
        return mini;

    }else {
        return num;
    }

} , arr[0])
console.log(minNumber);