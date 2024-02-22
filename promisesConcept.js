// asysc Operation

 const randomNumberPromises = new Promise((resolve , reject) => {

 
setTimeout( () => {
    const radom = Math.random();
    if(radom >0.5){
        console.log(radom);
    }
    else {
        rejects(new Error ("value is too Small"));
    }
} , 2000) ;  // delay of 2 seconds
})

randomNumberPromises
    . then( result => {
        console.log(" Promises full filled with value " ,result);

    })
    .catch (error => {
        console.error("Promises is rejected with error " , error);
    });