function obterTexto(id) {
    let textoEntrada = document.getElementById(id).value;
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

function ocultarCampo(...ids) {
    ids.forEach(id => {
        document.getElementById(id).style.display = "none";
    });

/*  MÉTODO ANTERIOR SUBSTITUIDO PELA FUNÇÃO COM FOREACH ---
function ocultarCampo(id)
    document.getElementById(id).style.display = "none"; */
}

    
function alterarEstiloElemento(id, propriedade, valor){
    let elemento = document.getElementById(id);
    elemento.style[propriedade] = valor;
    /* estamos acessando a propriedade através de [elementos dinâmicos], cuja notação dispensa o uso de pontos. São úteis para quando não sabemos qual valor será usado na função */ 
}

function alterarValorElemento(elemento, valor){
    let campo = document.querySelector(elemento, valor);
    campo.innerHTML = valor;
}

function exibeResultado(textoSaida) {
    ocultarCampo('principal__saida__img__empty','principal__saida__resultado__titulo','principal__saida__resultado__texto');
    /*
    O MÉTODO ACIMA EVITA RECHAMADA DE CÓDIGO
    ocultarCampo('principal__saida__img__empty');
    ocultarCampo('principal__saida__resultado__titulo');
    ocultarCampo('principal__saida__resultado__texto'); */
    
    alterarEstiloElemento('p1','justify-content','space-between');
    alterarEstiloElemento('botao_copiar','display','initial');
    /*let textoSaida = obterTexto();*/
    let campo = document.getElementById('principal__saida__resultado_valor');
    campo.innerHTML = textoSaida;
}

function iniciarCriptografia() {
    let textoEntrada = obterTexto('principal__entrada__input__texto');
    let textoSaida = criptografar(textoEntrada);
    alterarValorElemento(".principal__saida__resultado button", "Copiar");
    exibeResultado(textoSaida);


    /* O erro encontrado foi que as funções estavam sendo chamadas sequencialmente, porém sem os devidos parâmetros de entrada corretos. Agora, elas foram ajustadas para serem ativadas apenas se tiverem parâmetros de entrada. Além disso estão sendo chamadas uma a uma, na sequência correta respeitando a ordem de disponibilidade das variáveis que são necessárias para sua devida execução */
}

function iniciarDesriptografia() {
    let textoEntrada = obterTexto('principal__entrada__input__texto');
    let textoSaida = descriptografar(textoEntrada);
    alterarValorElemento(".principal__saida__resultado button", "Copiar");
    exibeResultado(textoSaida);
}

function obterTextoTAG(id){
    let textoSaida = document.getElementById(id);
    return textoSaida.textContent; 
}

function copiarResultado() {
    textoSaida = obterTextoTAG('principal__saida__resultado_valor');
    try {
        navigator.clipboard.writeText(textoSaida);
        alterarValorElemento(".principal__saida__resultado button", "Texto copiado!")
        
    } catch (error) {
        console.error(error.message);
        alterarValorElemento(".principal__saida__resultado button", "Erro ao copiar")
    }
}