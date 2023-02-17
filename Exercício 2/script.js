var modelosVeiculos = [];
var marcasVeiculos = [];


function cadastrarMarcaModelo(marcas, modelos){
    for(let modelo of modelos){
        console.log("Modelo cadastrado com sucesso!");
    }
    
    modelosVeiculos = modelos;
    marcasVeiculos = marcas;
    console.log(`Os veículos cadastrados foram: ${modelosVeiculos}`);
}

cadastrarMarcaModelo(['Toyota', ' Volkswagen', ' Ford'], ['Toyota Corolla', ' Volkswagen T-Cross', ' Ford Mustang']);