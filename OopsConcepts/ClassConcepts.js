class car{


    constructor(name , price,  model, colour)
{
    this.name = name;
    this.price = price;
    this.model = model;
    this.colour = colour;
}
 
  displayInfo() {

    console.log(this.name + " " + this.price+ " "+ this.model + " "+this.colour);
    
}

}

const c1 = new car("TATA" ,120000,2023,'balck');
c1.displayInfo();

const c2 = new car("viksagaon" ,200000,2024,'Red');

c2.displayInfo();



