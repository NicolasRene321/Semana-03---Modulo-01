var listaVeiculos = ([], [], [], []);
var marcasModelos = [];
var kmVeiculo = [];
var valorVeiculo = [];
var corVeiculo = [];

function cadastrarVeiculo(marcasModelos, kmVeiculo, valorVeiculo, corVeiculo){
    for(let marcaModelo of marcasModelos){
        console.log("Veículo cadastrado com sucesso!");
    }

    listaVeiculos = marcasModelos + kmVeiculo + valorVeiculo + corVeiculo;
    console.log(`\nOs veículos cadastrados são: ${listaVeiculos}`);

}

cadastrarVeiculo(['\n\nToyota Corolla', ' Volkswagen T-Cross', ' Ford Mustang\n'], ['186 km/h', ' 184 - 198 km/h', ' 250 km/h\n'], ['R$ 146.890', ' R$ 116.550', ' R$ 566.300\n'], ['Prateado', ' Bronze', ' Bordô']);