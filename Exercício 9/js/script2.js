var pageBody = document.getElementsByTagName('body');
var carModel = document.querySelector('.firstCard h2');
var carColor = document.querySelector('.firstCard h3');
var carKm = document.querySelectorAll('.firstCard h3')[1];
var carBrand = document.querySelectorAll('.firstCard h3')[2];
var carValue = document.querySelectorAll('.firstCard h2')[1];
var listButton = document.getElementsByTagName('button')[0];

listButton.addEventListener('click', listarVeiculos);

var vehicle1 = { 
    Model: 'Corolla Altis 2.0 16v', 
    Color: 'Gray', 
    Km: 22.900, 
    Brand: 'Toyota', 
    Value: 'R$ 145.900,00' 
}


var vehicle2 = {
    Model: 'EcoSport Freestyle 1.6 16v',
    Color: 'White',
    Km: 69.000,
    Brand: 'Ford',
    Value: 'R$ 60.000,00'
}
    
function listarVeiculos(){
    console.log(`${vehicle1} \n ${vehicle2}`);
    
}
