const sqr = num => num * num ;
const result = sqr(10);

console.log(result);


const msg = () => 'Welcome to javaScript';

console.log(msg());


const add = (a,b) => a+b;

const r = add(12,12);
console.log("Result " + r);

console.log(add(10,12));


const person = {

    name : "Raja Venkateswarlu",
    Village : "KDP",
    Designation : "test Engineer"

}

const getDetails = (person) => `${person.name} ${person.Village} ${person.Designation}`

const fullDetails = getDetails(person);

console.log(fullDetails);


// pasing the values Directly through function


const message = (userName = 'rajaVenkat@gmail.com' , password = 'raja@4556') => `Hello My UserName ${userName} and My password is ${password}`
 
const resultMessage = message();

console.log(resultMessage);


const resultmessage1 = message('venkat@gnail.com ', 'Venkat@134');

console.log(resultmessage1);


//Reset the parameters ...varargs

const sumOfArray = (...number) => number.reduce((acc , num ) => acc+num , acc= 0); 

const additionOfArray = sumOfArray(1,2,3,4,5,6);

console.log(additionOfArray);



const staticWithDynamic = (browserName = 'Chrome' , ...details) => {

    console.log(`browserName : ${browserName}`);
    console.log(`details ${details}`);
}

staticWithDynamic();

staticWithDynamic('Firefox' ,'11.5','mozilla', 'headless');

// maximum number using the math

const maxi = (a,b,c) => {
    return Math.max(a,b,c);
}

const maxNum  = maxi(12,15,9);

console.log(maxNum);



