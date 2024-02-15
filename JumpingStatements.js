// Break and Continue
  console.log("Usage of Break ")
for(let i =1; i <= 20 ; i++){

    if( i == 10){
        break;
        
    }
    console.log(i)
}

console.log("Usage of Continue")

for(let i =1; i <= 20 ; i++){

    if( i == 10){
        continue;
        
    }
    console.log(i)
}


for(let i =1; i <= 20 ; i++){

    if( i == 10 || i == 12 || i == 14){
        continue;
        
    }
    console.log(i)
}