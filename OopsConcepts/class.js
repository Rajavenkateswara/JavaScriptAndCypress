
class student {
  /*
    setDetails(){

         this.sid = 10;
         this.sName = "Kumar - Arjun";
        this.sGrade = "K";
    }
    
    setDetails(sid , sName ,sGrade){

        this.sid = sid;
        this.sName = sName;
        this.sGrade = sGrade;
    }
    */

    constructor (sid , sName ,sGrade){
        this.sid = sid;
        this.sName = sName;
        this.sGrade = sGrade;

    }

    display(){

        console.log( this.sid + " "+ this.sName + " "+ this.sGrade);
    }
}

let std = new student(302 , "Raja","Hot");
std.display();

let std1 =new student(303 , "venkat" , "Cool");
std1.display();

let std3 = new student(305 , "Srikanth" ,"Warm");
std3.display();

//With out paramerts
//std.setDetails();
//With parameters
//std.setDetails(301,"Raja" , "Cool");


std.display();