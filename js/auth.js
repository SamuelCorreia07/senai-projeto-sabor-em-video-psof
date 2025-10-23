// js/auth.js

document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DE CADASTRO (cadastro.html) ---
    const formCadastro = document.getElementById('form-cadastro');
    if (formCadastro) {
        formCadastro.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o envio do formulário

            // 1. Pegar os dados
            const nome = document.getElementById('nome-cadastro').value;
            const email = document.getElementById('email-cadastro').value;
            const senha = document.getElementById('senha-cadastro').value;

            // 2. Pegar o banco de usuários do localStorage (ou criar um novo)
            // Usamos "JSON.parse" para converter a string do localStorage de volta para um array
            const users = JSON.parse(localStorage.getItem('users')) || [];

            // 3. Verificar se o e-mail já existe
            const emailExiste = users.find(user => user.email === email);

            if (emailExiste) {
                alert('Erro: Este e-mail já está cadastrado.');
            } else {
                // 4. Adicionar o novo usuário
                users.push({ nome, email, senha });

                // 5. Salvar o array atualizado no localStorage
                // Usamos "JSON.stringify" para converter o array em uma string
                localStorage.setItem('users', JSON.stringify(users));

                alert('Cadastro realizado com sucesso! Você será redirecionado para o Login.');
                
                // 6. Redirecionar para o login
                window.location.href = 'login.html';
            }
        });
    }

    // --- LÓGICA DE LOGIN (login.html) ---
    const formLogin = document.getElementById('form-login');
    if (formLogin) {
        formLogin.addEventListener('submit', (e) => {
            e.preventDefault();

            // 1. Pegar os dados
            const email = document.getElementById('email-login').value;
            const senha = document.getElementById('senha-login').value;

            // 2. Pegar o banco de usuários
            const users = JSON.parse(localStorage.getItem('users')) || [];

            // 3. Procurar pelo usuário
            const user = users.find(user => user.email === email && user.senha === senha);

            if (user) {
                // 4. Sucesso! Salvar o usuário LOGADO no localStorage
                // Vamos chamá-lo de "currentUser"
                localStorage.setItem('currentUser', JSON.stringify(user));
                
                // 5. Redirecionar para o catálogo (index.html)
                window.location.href = 'index.html';
            } else {
                // 6. Falha
                alert('E-mail ou senha incorretos.');
            }
        });
    }

});