// filter checking the conditions
let num = [1,2,3,4,5,6,11,12,13,14,15,16];

let EvenNumber = num .filter( (e) => e % 2 == 0);

console.log(EvenNumber);

let OddNumber = num.filter((e) => e % 2 != 0);

console.log(OddNumber);

let emp =  [ 
    {name : 'Raja',age : 30 ,gender : 'Male'},
    {name : 'Rani',age : 24 ,gender : 'Female'},
    {name : 'Rajesh',age : 40 ,gender : 'Male'},
    {name : 'RajaKumar',age : 43 ,gender : 'Male'},
    {name : 'Sushma',age : 31 ,gender : 'Female'},
    {name : 'Sravani',age : 35 ,gender : 'Female'},
    {name : 'Padma',age : 30 ,gender : 'Female'},
    {name : 'Supraja',age : 22 ,gender : 'Female'},
    {name : 'Swathi',age : 18 ,gender : 'Male'},
]

let Age = emp.map((employ) => employ).filter((employ) => employ.age > 20 && employ.gender == 'Female');
console.log(Age);


let swathiRecod = emp.filter((e) => e.name == 'Swathi');
console.log(swathiRecod);

let rec = emp.filter((emp1) =>{
  return emp1.gender == 'Male' && emp1.age == 30}
  );
console.log(rec);

