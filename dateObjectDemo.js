

console.log("WelCome to Data");

let d = new Date();
console.log(d);

// date caculate From 1-31
console.log("Date" + d.getDate());
// Month Calculate 0-11
console.log("Month : " + d.getMonth()+1);

//Return current Year 
console.log("Year " + d.getFullYear());
console.log(d.getDate() + " " + d.getMonth()+1 + " " + d.getFullYear());

//0-23
console.log("Hours " + d.getHours());
// 0-59
console.log("Minites " + d.getMinutes());
//0-59
console.log("Seconds " + d.getSeconds());

console.log(d.getHours() + " "+ d.getMinutes() + " " + d.getSeconds());
