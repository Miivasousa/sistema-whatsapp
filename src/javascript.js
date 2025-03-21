//Escuta eventos da pág e executa os eventos dentro da {}
document.addEventListener('DOMContentLoaded', () => {

// Pega elementos do HTML pelo ID
    const loginForm = document.getElementById('login');
    const boxForm = document.getElementById('Agendar');
    const loginContainer = document.getElementById('loginForm');
    const boxContainer = document.getElementById('boxForm');

// Credenciais declaradas 
    const USUARIO_CORRETO = 'usuario';
    const SENHA_CORRETA = 'senha';

// Função para mostrar/ocultar telas (true : false)
    function toggleScreens(showAgendamento) {
        loginContainer.style.display = showAgendamento ? 'none' : 'block';
        boxContainer.style.display = showAgendamento ? 'block' : 'none';
    }

// Lógica formulário
// Escuta eventos da pág e executa os eventos dentro da {}
    loginForm.addEventListener('submit', (event) => {
// Evita o carregamento padrão da página HTML depois de um evento no caso 'submit'       
        event.preventDefault();
        
        const username = event.target.username.value; //acessa os elementos do input
        const password = event.target.password.value;
        
        if (username === USUARIO_CORRETO && password === SENHA_CORRETA) {
            toggleScreens(true); //alterna as duas telas 
            alert('Login realizado!');
        } else {
            alert('Credenciais inválidas!');
        }
    });


// Lógica agendamento
    boxForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = event.target.name.value;
        const phone = event.target.phone.value;
        const datetime = event.target.datetime.value;
        const message = event.target.message.value;

// Validação básica
        if (!name || !phone || !datetime || !message) {
            alert('Preencha todos os campos!');
            return;
        }

// Simula o agendamento (Salva no localStorage)
        const agendamento = {
            nome: name,
            telefone: phone,
            data: datetime,
            mensagem: message
        };

// Recupera agendamentos existentes ou cria array vazio
        const agendamentosSalvos = JSON.parse(localStorage.getItem('agendamentos')) || [];

// Adiciona um novo agendamento
        agendamentosSalvos.push(agendamento);

// Salva no localStorage
        localStorage.setItem('agendamentos', JSON.stringify(agendamentosSalvos));

// Redireciona para tela de listagem
        window.location.href = 'listagem.html';
    });

}); 