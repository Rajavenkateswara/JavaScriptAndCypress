
// Static variable/function will call without Object Creation
// Non static variables and Functions will access with help of Object Creation - by uisng object reference




class Car{


   static noOfWheels = 4;

     constructor(name , price ,model ,licenseNumber ,fuel){

        this.name = name;
        this.price = price;
        this.model = model;
        this.licenseNumber = licenseNumber;
        this.fuel = fuel;

     }

     drive(){
        console.log(` We Can driver the  ${this.name}`);
     }

     getInfo(){

        return (`${this.name} , ${this.price} , ${this.model} , ${this.licenseNumber}`);
     }

     static stopCar(){
        console.log(`we can stio the car when fuel is fully consumed ${this.fuel}`)
     }
}

const c1 = new Car("Maruthi" , 1200000 , 2020, 'AP123HK' , 'petrol');
//console.log(c1);

console.log(`${c1.name} ,${c1.price} , ${c1.model} , ${c1.fuel} , ${c1.licenseNumber} , ${Car.noOfWheels}, ${Car.stopCar}` );

//console.log(c1.getInfo());
 //c1.drive();
 //c1.stopCar(); //c1.stopCar is not a function

 //Car.stopCar();

//console.log(c1.drive());
//const wheel = c1.noOfWheels = 4;
//console.log(wheel);
//console.log(c1.noOfWheels);

//console.log(Car.noOfWheels);