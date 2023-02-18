function cadastrarMarca(){
    var marcaEscrita = document.getElementsByName("nome")[0];
    var marcasCadastradas = document.getElementsByClassName("marcas")[0];

    var liMarca = document.createElement('li');
    liMarca.classList = 'marca';
    liMarca.innerHTML = marcaEscrita.value;
    marcasCadastradas.appendChild(liMarca);
    console.log(marcasCadastradas.value);  

}
////////////////////////////////////////////////////////////////////////////////////////

var inserirModelo = document.getElementsByName('modelo')[0];
var modelosCadastrados = document.querySelector('.localModelos ul'); 
var bodyPage = document.getElementsByTagName('body')[0];

function cadastrarMarcaModelo(){
    var createLi = document.createElement('li');
    modelosCadastrados.appendChild(createLi);
    createLi.innerHTML = inserirModelo.value;
    bodyPage.appendChild(modelosCadastrados);
    
}
////////////////////////////////////////////////////////////////////////////////////////

var modeloSelecionado = document.querySelector('#selectModel option');
var imgInserida = document.getElementsByName('linkImg')[0];
var corInserida = document.getElementsByName('typeColor')[0];
var kmInserida = document.getElementsByName('typeKm')[0];
var valorInserido = document.getElementsByName('typeValue')[0];
var botaoCadastro = document.querySelector('#cadastro');
botaoCadastro.addEventListener('click', cadastrarVeiculo);

function cadastrarVeiculo(){
    console.log(`O modelo selecionado é: ${modeloSelecionado.value}\n O link da imagem é: ${imgInserida.value}\n A cor é: ${corInserida.value}\n A quilometragem é: ${kmInserida.value}\n O valor é: ${valorInserido.value} Reais`)

}