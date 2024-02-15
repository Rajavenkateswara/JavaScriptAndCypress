class Test{

    static a =10; //Static varible
    b =20; //non-Static variables

    static m1(){
        console.log("This m1 static method");
    }

    m2(){
        console.log("This m2 Non-Static method");
    }




    
}
 // We can accesing static varibles and static methods using class name .Variablename/methodName
console.log(Test.a); 10

Test.a = 1000;
console.log(Test.a); //100
Test.m1();
console.log(Test.b);  //undefined
//Test.m2();

//We can access Non-Static variables using Object creation 
let t = new Test();
console.log(t.b);

t.m2();