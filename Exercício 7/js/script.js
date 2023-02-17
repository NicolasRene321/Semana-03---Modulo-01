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