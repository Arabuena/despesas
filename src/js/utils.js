/**
 * ==========================================
 * utils.js
 * Funções auxiliares da aplicação
 * ==========================================
 */

/**
 * Gera um ID único para cada despesa.
 */
function gerarId() {
    return Date.now() + Math.floor(Math.random() * 1000);
}

/**
 * Converte texto em número.
 * Ex.: "R$ 1.234,56" => 1234.56
 */
function converterValor(valor) {

    if (!valor) return 0;

    return Number(
        valor
            .replace("R$", "")
            .replace(/\s/g, "")
            .replace(/\./g, "")
            .replace(",", ".")
    ) || 0;

}

/**
 * Formata número em Real Brasileiro.
 */
function formatarMoeda(valor) {

    return Number(valor).toLocaleString("pt-BR", {

        style: "currency",

        currency: "BRL"

    });

}

/**
 * Formata data.
 * Ex.: 2026-07-01 -> 01/07/2026
 */
function formatarData(data) {

    if (!data) return "";

    const partes = data.split("-");

    return `${partes[2]}/${partes[1]}/${partes[0]}`;

}

/**
 * Retorna a data atual.
 */
function dataHoje() {

    return new Date().toISOString().split("T")[0];

}

/**
 * Limpa espaços extras.
 */
function limparTexto(texto) {

    return texto.trim();

}

/**
 * Verifica se o valor informado é válido.
 */
function valorValido(valor) {

    return converterValor(valor) > 0;

}

/**
 * Máscara de moeda em tempo real.
 */
function mascaraMoeda(input) {

    let valor = input.value;

    valor = valor.replace(/\D/g, "");

    valor = (Number(valor) / 100).toFixed(2);

    valor = valor.replace(".", ",");

    valor = valor.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    input.value = "R$ " + valor;

}

/**
 * Exibe mensagem.
 */
function mostrarMensagem(texto) {

    alert(texto);

}

/**
 * Confirma ação.
 */
function confirmar(texto) {

    return confirm(texto);

}