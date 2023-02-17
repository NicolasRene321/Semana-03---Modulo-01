var marcasVeiculos = [];

function cadastrarMarca(marcas){
    for(let marca of marcas){
        console.log("Marca cadastrada com sucesso!");
    }
    
    marcasVeiculos = marcas;
    console.log(`A marcas registradas foram: ${marcasVeiculos}`);

}

cadastrarMarca(['Toyota', ' Volkswagen', 'Ford']);