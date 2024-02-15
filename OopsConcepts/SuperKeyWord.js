class Animal {

    constructor(colour){
        this.colour = colour;
    }

    printColour(){
        console.log(this.colour);
    }
}

class Dog extends Animal{

    constructor(colour,food){
         super(colour); // call parent constructor
        this.food = food;
    }

    eating (){

        console.log("Eating : " + this.food );
    }

    display(){
        this.printColour();
        this.eating();
    }
}

let d = new Dog("Black" , "meat");

d.eating();
d.display();