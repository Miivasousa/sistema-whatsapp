document.addEventListener('DOMContentLoaded', () => {
    // Escuta eventos da pág e executa os eventos dentro da {}
    const listaAgendamentos = document.getElementById('lista-agendamentos');
    // Busca e converte dados de agendamento do (localStorage) para um objeto JavaScript
    // Se não tiver dados inicia um array vazio
    const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];

    // Função para formatar a data e hora no formato brasileiro
    const formatarData = (dataString) => {
        const data = new Date(dataString);
        return data.toLocaleString('pt-BR');
    };

    // Mapeia cada agendamento para um elemento HTML exibindo os detalhes
    // Usa 'join('')' para transformar o array de elementos HTML em uma única string
    listaAgendamentos.innerHTML = agendamentos.map((agendamento, index) => `
        <div class="agendamento-card">
            <p><strong>Nome:</strong> ${agendamento.nome}</p>
            <p><strong>Telefone:</strong> ${agendamento.telefone}</p>
            <p><strong>Data/Hora:</strong> ${formatarData(agendamento.data)}</p>
            <p><strong>Mensagem:</strong> ${agendamento.mensagem.replace(/\n/g, '<br>')}</p>
            <button onclick="excluirAgendamento(${index})">Excluir</button>
        </div>
    `).join('');

    // Função para excluir um agendamento com base no índice
    // Atualiza o localStorage e recarrega a página para refletir as mudanças
    window.excluirAgendamento = (index) => {
    // Recupera os agendamentos atuais do localStorage
        const agendamentos = JSON.parse(localStorage.getItem('agendamentos'));
    // Remove o agendamento de acordo com o índice 
        agendamentos.splice(index, 1);
    // Salva a lista atualizada de agendamentos de volta no localStorage
        localStorage.setItem('agendamentos', JSON.stringify(agendamentos));
    // Recarrega a página para exibir a lista de agendamentos atualizada
        window.location.reload();
    };
});