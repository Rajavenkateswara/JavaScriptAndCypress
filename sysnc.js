// sync vs async behaviour

// 1 - done --> fetch 100 users data from API /DB --20 seconds
//2 - done  --> display user profile - 10 Seconds
//3 - done -- > Fectch the order details  -- 5 Sec
// 4 -done ---> do Somethimg 30 
//Total time consuming for 65  seconds for complete in 
//end
// Blocking the behaviour for the users

console.log("Start");
for(let i = 0 ; i <= 10 ; i++){
    console.log("Counter " + i);
}
console.log("End");


console.log("Started via Asynchronus");

setTimeout(() => {

    console.log("time out is done ")
},2000);

console.log("Ended via asynchronus");