

class Bank {

    roi(){
        return 0;
    }

}

class AXIS extends Bank {

    roi(){
        return 12.5;
    }
}
class SBI extends Bank {
    roi(){
        return 10.5;
    }
}

let a = new AXIS();
console.log(a.roi());

let s = new SBI();
console.log(s.roi());