/**
 * ==========================================
 * exportPdf.js
 * Exportação para PDF
 * ==========================================
 */

function exportarPDF() {

    const despesas = buscarDespesas();

    if (despesas.length === 0) {

        mostrarMensagem("Não existem despesas para exportar.");

        return;

    }

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    doc.setFontSize(16);

    doc.text("Relatório de Despesas", 14, 15);

    const linhas = despesas.map(item => [

        formatarData(item.data),

        item.descricao,

        formatarMoeda(item.valor)

    ]);

    doc.autoTable({

        startY: 25,

        head: [["Data", "Descrição", "Valor"]],

        body: linhas

    });

    doc.save("Relatorio_Despesas.pdf");

}