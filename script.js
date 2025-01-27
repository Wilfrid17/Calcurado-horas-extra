

document.getElementById('calculadoraForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obter valores do formulário
    const salario = parseFloat(document.getElementById('salario').value);
    const horasExtra50 = parseInt(document.getElementById('horasExtra50').value) || 0;
    const horasExtra100 = parseInt(document.getElementById('horasExtra100').value) || 0;
    
    // Calcular valor da hora extra
    const valorHoraExtraNormal = salario / 220;
    
    // Calcular valores de horas extras
    const valorHoraExtra50 = valorHoraExtraNormal + (valorHoraExtraNormal * 0.50);
    const valorHoraExtra100 = valorHoraExtraNormal + (valorHoraExtraNormal * 1.00);
    
    // Calcular totais
    const total50 = valorHoraExtra50 * horasExtra50;
    const total100 = valorHoraExtra100 * horasExtra100;
    
    // Preparar resultado
    let resultadoHTML = `
        <h2>Resultados do Cálculo</h2>
        <p>Valor da hora extra normal: R$ ${valorHoraExtraNormal.toFixed(2)}</p>
        <p>Valor da hora extra 50%: R$ ${valorHoraExtra50.toFixed(2)}</p>
        <p>Valor da hora extra 100%: R$ ${valorHoraExtra100.toFixed(2)}</p>
    `;
    
    // Adicionar totais se houver horas extras
    if (horasExtra50 > 0) {
        resultadoHTML += `<p>Total 50%: R$ ${total50.toFixed(2)}</p>`;
    }
    
    if (horasExtra100 > 0) {
        resultadoHTML += `<p>Total 100%: R$ ${total100.toFixed(2)}</p>`;
    }
    
    //Exibe o total somente se houver horas extras registradas
    if (horasExtra50 > 0 || horasExtra100 > 0) {
        const totalGeral = total50 + total100;
        resultadoHTML += `<p><strong>Total Geral: R$ ${totalGeral.toFixed(2)}</strong></p>`;
    } else {
        resultadoHTML += `<p>Nenhuma hora extra foi registrada</p>`;
    }
    
    // Exibir resultado
    document.getElementById('resultado').innerHTML = resultadoHTML;
});
