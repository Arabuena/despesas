/**
 * ==========================================
 * table.js
 * Controle da tabela de despesas
 * ==========================================
 */

const tbody = document.getElementById("tbody");
const totalGeral = document.getElementById("totalGeral");

/**
 * Atualiza a tabela completa.
 */
function atualizarTabela() {

    tbody.innerHTML = "";

    const despesas = buscarDespesas();

    if (despesas.length === 0) {

        tbody.innerHTML = `
            <tr>
                <td colspan="4" style="text-align:center;padding:20px;">
                    Nenhuma despesa cadastrada.
                </td>
            </tr>
        `;

        atualizarTotal();

        return;
    }

    despesas.forEach(despesa => {

        adicionarLinha(despesa);

    });

    atualizarTotal();

}

/**
 * Cria uma linha na tabela.
 */
function adicionarLinha(despesa) {

    const tr = document.createElement("tr");

    tr.innerHTML = `

        <td>${formatarData(despesa.data)}</td>

        <td>${despesa.descricao}</td>

        <td>${formatarMoeda(despesa.valor)}</td>

        <td>

            <button
                onclick="editarDespesa(${despesa.id})">

                ✏️

            </button>

            <button
                onclick="excluirDespesa(${despesa.id})">

                🗑️

            </button>

        </td>

    `;

    tbody.appendChild(tr);

}

/**
 * Atualiza o valor total.
 */
function atualizarTotal() {

    const total = calcularTotal();

    totalGeral.textContent = formatarMoeda(total);

}

/**
 * Exclui uma despesa.
 */
function excluirDespesa(id) {

    if (!confirmar("Deseja realmente excluir esta despesa?")) {

        return;

    }

    removerDespesaStorage(id);

    atualizarTabela();

}

/**
 * Edita uma despesa.
 */
function editarDespesa(id) {

    const despesa = buscarDespesaPorId(id);

    if (!despesa) {

        return;

    }

    document.getElementById("data").value = despesa.data;

    document.getElementById("descricao").value = despesa.descricao;

    document.getElementById("valor").value = formatarMoeda(despesa.valor);

    // Guarda o ID da despesa que será editada.
    document.getElementById("btnAdicionar").dataset.editando = id;

    document.getElementById("btnAdicionar").textContent = "Salvar Alteração";

}

/**
 * Limpa a tabela.
 */
function limparTabela() {

    tbody.innerHTML = "";

    atualizarTotal();

}