var emp = 
{
    name: "Hari",
    company : "infosys",
    Designation : "Technology support speclist",
    salary : 50000,
    dateOfJoining : "March 2020",

    bonus : function(){

      return ( (this.salary * 10) / 100);
    },
     
    bonus1 : function (){

        let hike =( (this.salary * 20)/100);
    
        return hike;
    }
    
};





console.log(emp.bonus);  //[Function: bonus]

console.log(emp["bonus"]); //[Function: bonus]

console.log(emp.bonus());

console.log(emp.bonus1());