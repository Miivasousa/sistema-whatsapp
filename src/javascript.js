//document.addEventListener - função que escuta eventos da página e executa uma ação 'DOMContentLoaded'
document.addEventListener('DOMContentLoaded', () => {

// Elementos do DOM
    const loginForm = document.getElementById('login');
    const boxForm = document.getElementById('Agendar');
    const loginContainer = document.getElementById('loginForm');
    const boxContainer = document.getElementById('boxForm');

    // Credenciais declaradas 
    const USUARIO_CORRETO = 'usuario';
    const SENHA_CORRETA = 'senha';

    // Função para mostrar/ocultar telas
    function toggleScreens(showAgendamento) {
        loginContainer.style.display = showAgendamento ? 'none' : 'block';
        boxContainer.style.display = showAgendamento ? 'block' : 'none';
    }

    // Lógica formulário
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const username = event.target.username.value;
        const password = event.target.password.value;

        if (username === USUARIO_CORRETO && password === SENHA_CORRETA) {
            toggleScreens(true);
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

        console.log('Agendamento simulado:', agendamento);
        alert('Mensagem agendada com sucesso!');
        boxForm.reset(); // Limpa o formulário
    });
});