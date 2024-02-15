
function checkAge (age){
       let message;
    if(age > 18 ){
        message  = "Elgible for vote";
    }
    else {
        message = "Not Elgible for vote";
    }

    console.log(message);

}
checkAge(20);


// if else if 

function checkNumber(Number){
    var message ;

    if(Number < 0){
        message = "Number is -ve";
    }else if(Number > 0){
        message = "Number is +ve";
    }else {
        message = "Zero Number found";
    }

    console.log(message);
}

checkNumber(12);
checkNumber(-12);
checkNumber(0);


//Nested if -else
function checkGarde(score){

    var grade;

    if(score >= 90){
        grade = 'A';
    }else{
        if(score >= 80){
            grade = 'B';
        }
        else{
            if(score >= 70){
                grade = 'c';
            }else{
                if(score >= 60){
                    grade = 'D';
                }
                else{
                    grade = 'F';
                }
            }
        }
    }

    console.log(grade);

}

checkGarde(90);
checkGarde(80);
checkGarde(70);
checkGarde(60);
checkGarde(30);

function setUpBrowser(browser){

    let browserSetUp;

    if(browser == "Chrome"){
        browserSetUp ="Launch Chrome Browser";
        console.log(browserSetUp);

    }
    if(browser == "Firefox"){
        browserSetUp ="Launch Firefox Browser";
        console.log(browserSetUp);

    }
    if(browser == "Edge"){
        browserSetUp ="Launch Edge Browser";
        console.log(browserSetUp);

    }
    if(browser == "Safari"){
        browserSetUp ="Launch Safari Browser";
        console.log(browserSetUp);

    }
    else{
        browserSetUp = "please Enter Right Browser Name";
    }
    console.log(browserSetUp);

}
setUpBrowser("Chrome");

setUpBrowser("Firefox");
setUpBrowser("Edge");
setUpBrowser("Safari");


//invoking with 
function invokeBrowser(browser){

    let browserSetUp;

    if(browser == "Chrome"){
        browserSetUp ="Launch Chrome Browser";
       // console.log(browserSetUp);

    }
   else if(browser == "Firefox"){
        browserSetUp ="Launch Firefox Browser";
       // console.log(browserSetUp);

    }
   else if(browser == "Edge"){
        browserSetUp ="Launch Edge Browser";
        //console.log(browserSetUp);

    }
   else if(browser == "Safari"){
        browserSetUp ="Launch Safari Browser";
       // console.log(browserSetUp);

    }
    else{
        browserSetUp = "please Enter Right Browser Name";
    }
    console.log(browserSetUp);

}

invokeBrowser("Chrome");
invokeBrowser("Firefox");
invokeBrowser("Edge");
invokeBrowser("Safari");
invokeBrowser("Electron");




