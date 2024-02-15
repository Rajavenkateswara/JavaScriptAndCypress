let x =10;

console.log(typeof x);

x = "Hellow";
console.log(typeof x);

x = 200;
console.log(typeof x);

x = true;
console.log(typeof x);

x = {
    name : 'jjvbjh',
    id : 1234
}
console.log(typeof x); //object

let y ;
console.log(typeof y); //object

const arr = [1,2,3,4,5,6,7,8,9];
console.log(typeof arr); //object

const j = null ;

console.log(typeof j); //object


function name(Name){
    console.log(this.name)
}

console.log(typeof name); // Function



