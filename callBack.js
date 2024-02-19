// Call Back function
//async call/task --once this task is completed --then only call back function will be called

// basic Call back

function greet(Name ,callback){

    callback();

    console.log(`${Name} welcome javaScript programming`); //normal /sync Step / task,cloud be asysnc/api
    callback();

}
// callback Function

function welcome(){
    console.log('Salesforce Automation');
}


 greet('Raja' ,welcome);



// call back with asyncfunction

function printInfo(name , callback){

    // async function /task /step
    setTimeout(function (){

        console.log("Printing Name " + name);

        callback("Please callme back ");
        
    }, 5000) // delay of 1000 ms /  1 Sec;

}

//Call back
function displayMessage(msg){
    console.log(msg);
}

printInfo('Venkat' ,displayMessage);


 function fecthUserData(userId ,Name , callback){

    setTimeout(function() {

        console.log(`userdetails :- ${userId} , ${Name}`);

        callback("Welcome to Salesforce Testing");


    }, 5000);

 }

 function message(message){
    
    console.log(message);
 }

 
 

 fecthUserData('12ABC','raja',message);

 //

 function userDetails(userId, callback){

    setTimeout(function(){
        const users = {
           // Name : 'Raja Venkateswarlu',
           // Village : 'Kadaparajupalli',
           // height : '5.2',
          //  weight : '50'

          1: {id : 1 , name : 'Raja'},
          2 : {id : 2 , name : 'Tom'},
          3 : { id : 3 , name : 'joy'},
        };
        const user = users[userId];

        if(user ){
            callback(null, user)
        }else{
            callback("User not found" , null);
        }



        

    }, 5000);
 }

 //callBack function

 function handleUserData(error ,user){

    if(error){
        console.log("Error " ,error);
    }else {
        console.log("User " ,user);
    }

 }


 userDetails(3,handleUserData);

