function obterTexto() {
    let textoEntrada = document.getElementById('principal__entrada__input__texto').value;
    // console.log(textoEntrada);
    return textoEntrada;
}

function ocultarCampo(id) {
    document.getElementById(id).style.display = "none";
}
    
function alterarEstiloClasse(id, propriedade, valor){
    let elemento = document.getElementById(id);
    elemento.style[propriedade] = valor;
    /* estamos acessando a propriedade através de [elementos dinâmicos], cuja notação dispensa o uso de pontos. São úteis para quando não sabemos qual valor será usado na função */ 
}

function exibeResultado() {
    ocultarCampo('principal__saida__img__empty');
    ocultarCampo('principal__saida__resultado__titulo');
    ocultarCampo('principal__saida__resultado__texto');
    /* entender posteriormente como evitar a chamada 3x */
    alterarEstiloClasse('p1','justify-content','flex-start');
    let textoSaida = obterTexto();
    let campo = document.getElementById('principal__saida__resultado_valor');
    campo.innerHTML = textoSaida;
}

