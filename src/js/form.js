/**
 * ==========================================
 * form.js
 * Controle do formulário
 * ==========================================
 */

const inputData = document.getElementById("data");
const inputDescricao = document.getElementById("descricao");
const inputValor = document.getElementById("valor");
const btnAdicionar = document.getElementById("btnAdicionar");

// Define a data atual ao abrir o sistema
inputData.value = dataHoje();

/**
 * Máscara de moeda em tempo real
 */
inputValor.addEventListener("input", function () {
    mascaraMoeda(this);
});

/**
 * Clique no botão Adicionar
 */
btnAdicionar.addEventListener("click", salvarDespesa);

/**
 * Salva ou edita uma despesa
 */
function salvarDespesa() {

    const data = inputData.value;

    const descricao = limparTexto(inputDescricao.value);

    const valor = converterValor(inputValor.value);

    // Validações

    if (!data) {

        mostrarMensagem("Informe a data.");

        return;

    }

    if (descricao === "") {

        mostrarMensagem("Informe a descrição.");

        inputDescricao.focus();

        return;

    }

    if (valor <= 0) {

        mostrarMensagem("Informe um valor válido.");

        inputValor.focus();

        return;

    }

    // Está editando?

    const idEdicao = btnAdicionar.dataset.editando;

    if (idEdicao) {

        atualizarDespesaStorage(Number(idEdicao), {

            data,

            descricao,

            valor

        });

        btnAdicionar.textContent = "Adicionar";

        delete btnAdicionar.dataset.editando;

    } else {

        adicionarDespesaStorage({

            id: gerarId(),

            data,

            descricao,

            valor

        });

    }

    limparFormulario();

    atualizarTabela();

}

/**
 * Limpa os campos
 */
function limparFormulario() {

    inputData.value = dataHoje();

    inputDescricao.value = "";

    inputValor.value = "";

    inputDescricao.focus();

}

/**
 * Permite pressionar ENTER
 */
document.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        e.preventDefault();

        salvarDespesa();

    }

});