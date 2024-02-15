class Student
{


    constructor(){

        var name, marks;
    }

    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }

    setMarks(marks){

       this.marks = marks;
    }
    getMarks(){
        return this.marks;
    }


}

let stu = new Student();
stu.setName("Raja");
console.log(stu.getName());

stu.setMarks(200);
console.log(stu.getMarks());