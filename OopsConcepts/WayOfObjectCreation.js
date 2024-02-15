//1 .  Object Literals : {}

const user = {
    name : 'Raja',
    age : '20',
    occupation : 'Test Engineer',
    Country : 'IND'

}

console.log(user.name);
console.log(user.age);
console.log(user.occupation);
console.log(user.Country);

// 2 .Constructor Function

function car(Brand , Model , Colour , price){

    this.Brand = Brand;
    this.Model = Model;
    this.Colour = Colour;
    this.price = price;
};

const c1 =new car("Toyota" , "z10" , "Colour" , 12000);
console.log(c1);
console.log(c1.price + " "+ c1.Colour);


const c2 = new car("TATA" , "indica" , "Black" , 5000);
console.log(c2.Brand + " " + c2.Colour + " "+ c2.price);

// 3 . Class Style

class Customer{

    constructor(name ,  product){

        this.name = name;
        this.product = product;
    }

    addToCart(){
        console.log(`name is ${this.name} and produt name is ${this.product} `)
    }
}

// instance of the class

const cust = new Customer("Raja" ,"Madicine");

cust.addToCart();

console.log(cust .name);
console.log(cust.product);

//4 .Object .create() : with some property type Object

const EmployeePrototype = {
    empInfo : function(){
        console.log(`Hello emp name is ${this.name}`);
        console.log(`employee Id ${this.id}`);
    }
}

const e1 = Object.create(EmployeePrototype);

e1.name = 'Sree';
e1.id = 10231;
e1.empInfo();


//5 .Using Factory Function :  return the Object

function createDepartment(depName, HOD, Principle){
    return{
        depName : depName,
        HOD : HOD,
        Principle : Principle,

        employeInfo: function(){

            console.log(`depName ${this.depName} and HOD ${this.HOD} and Principal Name ${this.Principle}`)

        }

    }
}

const dep = createDepartment('Mechanical ', 'Venkat' , 'KrishnaReddy');

const d2 = createDepartment('CSE' ,'SREE' , 'KRISHNA REDDY');

dep.employeInfo();
d2.employeInfo();

console.log(dep.HOD + " "+ dep.depName);
console.log(d2.depName + " "+ d2.HOD);







