class Car{

    constructor(make, model){
        this.make = make ;
        this.model = model ;
    }

    printCarProperties(){
        console.log(`Making company ${this.make} and Model is ${this.model}`);
    }

    startEngine(){
        console.log('Starting the Engine ' + this.make);
    }
}

class Audi extends Car{
    // Overridden Method

    minSpeed = '120 km/hr'
    startEngine(){
        console.log('Starting the Engine ' + this.make);
    }

    autoParking(){
        console.log("Audi has a  Special feature as Auto parking");
    }
}

const a = new Audi("TATA" , 2023);
a.printCarProperties();
a.startEngine();
a.autoParking();
console.log(a.minSpeed);

 const c1 =new Car("KIA" , 2020);
 c1.printCarProperties();
 c1.startEngine();
 //c1.autoParking(); //TypeError: c1.autoParking is not a function

