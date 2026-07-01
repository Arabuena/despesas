/**
 * ==========================================
 * storage.js
 * Controle do LocalStorage
 * ==========================================
 */

const STORAGE_KEY = "relatorio_despesas";

/**
 * Retorna todas as despesas.
 */
function buscarDespesas() {

    const dados = localStorage.getItem(STORAGE_KEY);

    if (!dados) {

        return [];

    }

    return JSON.parse(dados);

}

/**
 * Salva a lista completa.
 */
function salvarDespesas(lista) {

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(lista)

    );

}

/**
 * Adiciona uma despesa.
 */
function adicionarDespesaStorage(despesa) {

    const despesas = buscarDespesas();

    despesas.push(despesa);

    salvarDespesas(despesas);

}

/**
 * Atualiza uma despesa existente.
 */
function atualizarDespesaStorage(id, novosDados) {

    const despesas = buscarDespesas();

    const novaLista = despesas.map(item => {

        if (item.id === id) {

            return {

                ...item,

                ...novosDados

            };

        }

        return item;

    });

    salvarDespesas(novaLista);

}

/**
 * Remove uma despesa.
 */
function removerDespesaStorage(id) {

    const despesas = buscarDespesas();

    const novaLista = despesas.filter(item => item.id !== id);

    salvarDespesas(novaLista);

}

/**
 * Limpa todas as despesas.
 */
function limparStorage() {

    localStorage.removeItem(STORAGE_KEY);

}

/**
 * Calcula o valor total.
 */
function calcularTotal() {

    const despesas = buscarDespesas();

    return despesas.reduce((total, item) => {

        return total + Number(item.valor);

    }, 0);

}

/**
 * Verifica se existe alguma despesa.
 */
function possuiDespesas() {

    return buscarDespesas().length > 0;

}

/**
 * Busca uma despesa pelo ID.
 */
function buscarDespesaPorId(id) {

    return buscarDespesas().find(item => item.id === id);

}

/**
 * Retorna a quantidade de despesas.
 */
function quantidadeDespesas() {

    return buscarDespesas().length;

}