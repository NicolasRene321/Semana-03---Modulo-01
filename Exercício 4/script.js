var listaVeiculos = ([], [], [], []);
var modelosVeiculo = [];
var marcasVeiculo = [];
var kmVeiculo = [];
var valoresVeiculo = [];
var coresVeiculo = [];
var objetoVeiculos = {
    Modelos: [],
    Marcas: [],
    Km: [],
    Valores: [],
    Cores: []
};

function listarVeiculosCadastrados(modelosVeiculo, marcasVeiculo, kmVeiculo, valoresVeiculo, coresVeiculo){

    listaVeiculos = modelosVeiculo + marcasVeiculo + kmVeiculo + valoresVeiculo + coresVeiculo;
    return listaVeiculos;
}

listarVeiculosCadastrados(['\n\nModelos: Toyota Corolla', ' Volkswagen T-Cross', ' Ford Mustangn\n'], ['Marcas: Toyota', ' Volkswagen', ' Ford\n'], ['Km: 186 km/h', ' 184 - 198 km/h', ' 250 km/h\n'], ['Valores: R$ 146.890', ' R$ 116.550', ' R$ 566.300\n'], ['Cores: Prateado', ' Bronze', ' Bordô']);

objetoVeiculos = listaVeiculos;
