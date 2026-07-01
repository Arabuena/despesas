/**
 * ==========================================
 * app.js
 * Inicialização da aplicação
 * ==========================================
 */

document.addEventListener("DOMContentLoaded", () => {

    // Carrega tabela
    atualizarTabela();

    // =====================
    // Excel
    // =====================

    document
        .getElementById("btnExcel")
        .addEventListener("click", exportarExcel);

    // =====================
    // PDF
    // =====================

    document
        .getElementById("btnPdf")
        .addEventListener("click", exportarPDF);

    // =====================
    // Limpar Tudo
    // =====================

    document
        .getElementById("btnLimpar")
        .addEventListener("click", () => {

            if (!confirm("Deseja apagar todas as despesas?")) {
                return;
            }

            localStorage.removeItem("despesas");

            atualizarTabela();

            mostrarMensagem("Todas as despesas foram removidas.");

        });

});