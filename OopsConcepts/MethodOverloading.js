function print(){
    console.log("Iam in print Method");
}

function print(fName ,lName ){
    console.log(fName + " " + lName);
}

function print(fName , lName , surName){
    console.log(fName + " " + lName + " "+surName);
}

print('Raja' , 'Karravula' ,  'Venkateswarlu');
// We cant overload the methods in JavaScript

// Run the Test cases on Remote machine 

// browserName , BrowserVersion , remoteExecution

function displayBrowserInfo(browserName , browserVersion, remoteExecution){

    if(typeof browserVersion === 'number' && typeof remoteExecution == 'boolean'){
        console.log(`BrowserName :  ${browserName} and browserVesrion : ${browserVersion} and remoteExecution ${remoteExecution}`);
    }
    else if(typeof browserVersion === 'number') {

        console.log(`BrowserVersion : - ${browserVersion }, and RemoteExecution : - ${browserName} `);
    }
    else{
        console.log(`Reomet Execution :- ${browserName}`);
    }    

    }

    displayBrowserInfo("chrome" , 112, true);
    displayBrowserInfo("chrome" , 123 );
    displayBrowserInfo("fireFox");

