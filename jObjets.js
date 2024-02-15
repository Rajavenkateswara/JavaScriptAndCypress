let person = {

    name : "Raja venkateswarlu",
    LastName : "Karravula",
    Village : "Kadaparajupalii",
    Mandal : "Doranala",
    age : 25,
    Weight : 50 ,
    Occupation : "Software testing"
}

// Accesing the object properties

console.log(person.name);
console.log(person.age);
console.log(person.Occupation);

console.log(person["Mandal"]);
console.log(person["LastName"]);

//Update existing properties 

person.age = 25;
person["name"] = "Raja Chowdary";

console.log(person.age + " " + person["name"]);

//Add NEW properties to object;

person.habit = "Running";
console.log(person.habit);

person["WakeUpTime"] = "5:30";
console.log(person.WakeUpTime);

//Remove the Property from the Object

delete person.WakeUpTime
delete person.Mandal
console.log(person["WakeUpTime"]); //undefind
console.log(person["Mandal"]); //Undefind


console.log("*************Looping the object using IN LOOP************");
// for / in  loop

for(let x in person){

    //console.log(x); // PRINT ONLY PROPERTY NAMES

    //console.log(person[x]) ;; //  PRINT ONLY VALUES OF PROPERTIES 

    console.log(x  + "  " + person[x]); // print property and values 


}