# Sabor Em Vídeo - Plataforma de Streaming de Receitas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Projeto front-end desenvolvido para a matéria de Projetos de Software no SENAI. Trata-se de uma interface web interativa para uma plataforma de streaming de vídeos de receitas, simulando funcionalidades como catálogo, reprodução, autenticação e recomendações.

---

## 🚀 Visão Geral das Funcionalidades

* **📺 Catálogo de Receitas:** Exibe um grid com diversas receitas, incluindo imagem, título e "likes" (simulados).
* **▶️ Página de Reprodução:** Ao clicar em uma receita, o usuário é direcionado para uma página dedicada com:
    * Player de vídeo (integrado com YouTube).
    * Detalhes da receita (título, descrição expansível).
    * Informações do chef.
    * Seção de comentários (com dados mockados).
    * Lista de vídeos recomendados.
* **🔍 Filtros de Categoria:** Permite filtrar as receitas exibidas no catálogo por tipo (Em alta, Doces, Salgados, Vegano, Saudável, Pratos).
* **👤 Autenticação de Usuário:**
    * Páginas separadas para Login e Cadastro.
    * Utiliza `localStorage` para simular o armazenamento de usuários e a sessão do usuário logado.
    * Implementa uma "guarda de autenticação" que redireciona para o login caso o usuário tente acessar as páginas principais sem estar logado.
* **📊 Dados Mockados:** Utiliza arrays JavaScript (`db_recipes`, `db_chefs`, `db_comments`) para simular um banco de dados.
* **🎨 Layout Responsivo:** Interface com design moderno e adaptável a diferentes tamanhos de tela.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web padrão:

* **HTML5:** Para a estruturação semântica das páginas (`index.html`, `reproducao.html`, `login.html`, `cadastro.html`).
* **CSS3:** Para estilização visual, definição de layout (Flexbox, Grid) e paleta de cores.
* **JavaScript (ES6+):** Para toda a lógica interativa, manipulação do DOM, simulação de banco de dados, autenticação via `localStorage` e navegação entre páginas.
* **Font Awesome:** Para ícones.

---

## 🏃‍♀️ Como Executar o Projeto

Como se trata de um projeto front-end puro, não há necessidade de build ou servidor backend.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/samuelcorreia07/senai-projeto-sabor-em-video-psof.git](https://github.com/samuelcorreia07/senai-projeto-sabor-em-video-psof.git)
    cd senai-projeto-sabor-em-video-psof
    ```

2.  **Abra os arquivos HTML:**
    * Abra o arquivo `login.html` ou `cadastro.html` no seu navegador para iniciar o fluxo de autenticação.
    * Após o login/cadastro, você será redirecionado para `index.html`.
    * **Observação:** É recomendado abrir os arquivos através de um servidor local (como a extensão "Live Server" do VS Code) para garantir que todas as funcionalidades (especialmente navegação e scripts) funcionem corretamente.

---
