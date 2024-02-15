
function invokeBrowser(browser){

    switch(browser){
        case "chrome" : console.log("SetUp ChromeBrowser");break;
        case "firefox" : console.log("SetUpFireFox");break;
        case "Edge" : console.log("SetUp Edge");break;
        case "IE" : console.log("SetUp IE");break;
        default : console.log("Please enter proper Browser");break;
    }

}
invokeBrowser("chrome");
invokeBrowser("firefox");
invokeBrowser("Edge");


function numberOfDayOfWeek(Number){

    let day ;

    switch(Number){
        case 0 : day = "Sunday";break;
        case 1 : day = "Monday" ; break;
        case 2 : day = "Tuesday";break;
        case 3 : day = "Wednesday" ; break;
        case 4 : day = "Thurday";break;
        case 5 : day = "Friday";break;
        case 6 : day = "SaturDay";break;
        default : day = "Inavild Day ";break;
    }
    console.log(day);
}

numberOfDayOfWeek(0);
numberOfDayOfWeek(2);
numberOfDayOfWeek(5);
numberOfDayOfWeek(4);
numberOfDayOfWeek(12);

/*
Multi environments : DEV,QA,STAGE,UAT ,PRO
MULTI USER : ADMIN CUSTOMER , SELLER , MANGERS , DISTRUBUTION;
*/