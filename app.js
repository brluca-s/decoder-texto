function obterTexto() {
    let textoEntrada = document.getElementById('principal__entrada__input__texto').value;
    // console.log(textoEntrada);
    return textoEntrada;
}

function criptografar(textoEntrada) {
    textoSaida = textoEntrada
    .replace(/e/g,"enter")
    .replace(/i/g,"imes")
    .replace(/a/g,"ai")
    .replace(/o/g,"ober")
    .replace(/u/g,"ufat");  
    return textoSaida;
    
}

function descriptografar(textoEntrada) {
    textoSaida = textoEntrada
    .replace(/enter/g,"e")
    .replace(/imes/g,"i")
    .replace(/ai/g,"a")
    .replace(/ober/g,"o")
    .replace(/ufat/g,"u");   
    return textoSaida;
    
}

function ocultarCampo(id) {
    document.getElementById(id).style.display = "none";
}
    
function alterarEstiloClasse(id, propriedade, valor){
    let elemento = document.getElementById(id);
    elemento.style[propriedade] = valor;
    /* estamos acessando a propriedade através de [elementos dinâmicos], cuja notação dispensa o uso de pontos. São úteis para quando não sabemos qual valor será usado na função */ 
}

function exibeResultado(textoSaida) {
    ocultarCampo('principal__saida__img__empty');
    ocultarCampo('principal__saida__resultado__titulo');
    ocultarCampo('principal__saida__resultado__texto');
    /* entender posteriormente como evitar a chamada 3x */
    alterarEstiloClasse('p1','justify-content','flex-start');
    /*let textoSaida = obterTexto();*/
    let campo = document.getElementById('principal__saida__resultado_valor');
    campo.innerHTML = textoSaida;
}

function iniciarCriptografia() {
    let textoEntrada = obterTexto();
    let textoSaida = criptografar(textoEntrada);
    exibeResultado(textoSaida);

    /* O erro encontrado foi que as funções estavam sendo chamadas sequencialmente, porém sem os devidos parâmetros de entrada corretos. Agora, elas foram ajustadas para serem ativadas apenas se tiverem parâmetros de entrada. Além disso estão sendo chamadas uma a uma, na sequência correta respeitando a ordem de disponibilidade das variáveis que são necessárias para sua devida execução */
}

function iniciarDesriptografia() {
    let textoEntrada = obterTexto();
    let textoSaida = descriptografar(textoEntrada);
    exibeResultado(textoSaida);
}