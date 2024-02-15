
function getCaffeine(type){

      var Caffeine ;

    switch(type){
        case 'Coffe' : Caffeine = '95 mg'; break;
        case 'RedBull' : Caffeine = '147 mg' ; break;
        case 'Tea' : Caffeine = '11 mg' ; break ;
        case 'Soda' : Caffeine = '21 mg' ; break ;
        default : Caffeine = ' Not found'; 
    }

    return Caffeine ;
}

//console.log(typeof caffeine);

//console.log(getCaffeine('Tea'));

console.log(typeof Caffeine);

console.log(getCaffeine('Soda'));

console.log(typeof Caffeine);