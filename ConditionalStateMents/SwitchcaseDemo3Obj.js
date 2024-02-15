

function getCaffeine(type){


    var caffine ;

    const map = {
        'Coffe' : '95 mg',
        'Soda' : '11 mg',
        'RedBull' : '147 mg',
        'Tea' : '15 mg'

    }
    caffine = map[type] ?? 'Not found';
    return caffine ;
}

console.log(getCaffeine('Tea'));

console.log(getCaffeine('Soda'));

console.log(getCaffeine('Null'));

