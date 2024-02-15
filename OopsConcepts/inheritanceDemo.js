 
 class AutoMobile{
    constructor(chasisNumber){
        this.chasisNumber = chasisNumber;
    }
    userAreoDynamic(){

        console.log("Automobile -AeroDynamice " + this.chasisNumber);

    }
 }
 
 // multiple inheritance not possible in j-Script

 class Cycle{

    constructor(make ,model, year){
        this.model = model;
        this,make = make ;
        this.year = year ;
    }
    getInfoCycle(){
        return `${this.model} , ${this.make} , ${this.year}`;
    }

 }
 
 // Parent calss , Super class
class vehicle extends AutoMobile {


    constructor( make  , model ,year){
        super();
        this.make = make;
        this.model  = model;
        this . year = year;

    }

    getInfo(){
        return `${this.make} , ${this.model} , ${this.year} `;
    }

    startEngine(){
        console.log("Start the Engine " + this.make);
    }

    stopEngine(){
        console.log("Stop the Engine   " +this.make);
    }
}

// Child Class - sub Class

class Car extends vehicle {  // Classes can only extend a single class.ts(1


    constructor( make  , model ,year,fuleType  ){
       super(make,model,year); // call parent class constructor;
       this.fuleType = fuleType;

    }

    driverCar(){
        console.log("Driving the car   " + this.model + " FuelType is " + this.fuleType);
    }


}

class Truck extends vehicle{

    constructor(make,model,year,loadingCapacity ){
        super(make,model,year );
        this.loadingCapacity = loadingCapacity;
    }

    driverTruck(){
        console.log("Driver the tuck " + this.model + " and   "  + this.loadingCapacity);
    }
}

//car c = new car("India" , "TATA" , 2020);

// Create Objects;

const car = new Car("Honda","civic", 2020, "Petrol",8675878767);

car.startEngine();

car.driverCar();

car.stopEngine();

console.log(car.getInfo());
car.chasisNumber = 675757578;

car.userAreoDynamic();


const truck = new Truck("AshokLayland" , "Sumo" , 2023, 1000 , 6748383489258);
truck.driverTruck();
truck.startEngine();
truck.stopEngine();

console.log(truck.getInfo());

//truck.driverCar(); //TypeError: truck.driverCar is not a function

truck .chasisNumber = 8989598795;
truck.userAreoDynamic();


