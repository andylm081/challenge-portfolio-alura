document.getElementById('form').addEventListener('submit', function(event) {
    // Impede o envio padrão do formulário
    event.preventDefault();

    // Validação dos campos
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    // Validação do campo Nome
    if (name === '') {
        document.getElementById('name-error').innerText = 'Por favor, preencha o nome.';
        return;
    } else {
        document.getElementById('name-error').innerText = '';
    }

    // Validação do campo Email
    if (email === '') {
        document.getElementById('email-error').innerText = 'Por favor, preencha o email.';
        return;
    } else {
        document.getElementById('email-error').innerText = '';
    }

    // Validação do campo Mensagem
    if (message === '') {
        document.getElementById('message-error').innerText = 'Por favor, preencha a mensagem.';
        return;
    } else {
        document.getElementById('message-error').innerText = '';
    }

    // Se todos os campos estiverem preenchidos, exibir mensagem de sucesso como um pop-up
    alert('Enviado com sucesso!');

    // Resetando o formulário após o envio (opcional)
    this.reset();
});