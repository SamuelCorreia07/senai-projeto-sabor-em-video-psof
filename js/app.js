// js/app.js

// ==========================================================
// 1. GUARDA DE AUTENTICAÇÃO (AUTH GUARD)
// Este código roda IMEDIATAMENTE.
// ==========================================================
(function() {
    // Pegamos o usuário logado do localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // Se NÃO houver usuário (null), redireciona para o login
    if (!currentUser) {
        // Esta é a lógica que protege suas páginas
        alert('Você precisa estar logado para acessar esta página.');
        window.location.href = 'login.html';
    }
})(); // Os parênteses () no final fazem a função executar sozinha


// ==========================================================
// 2. BANCO DE DADOS FALSO (MOCK)
// (Para simular suas receitas)
// ==========================================================
const db_recipes = [
    // Doces
    { id: 1, title: 'Brigadeiro de colher', type: 'Doces', img: 'https://via.placeholder.com/300x180' },
    { id: 2, title: 'Bolo de cenoura', type: 'Doces', img: 'https://via.placeholder.com/300x180' },
    { id: 3, title: 'Pudim de Leite', type: 'Doces', img: 'https://via.placeholder.com/300x180' },
    { id: 4, title: 'Mousse de Maracujá', type: 'Doces', img: 'https://via.placeholder.com/300x180' },
    { id: 5, title: 'Torta de Limão', type: 'Doces', img: 'https://via.placeholder.com/300x180' },
    { id: 6, title: 'Cookies com Gotas', type: 'Doces', img: 'https://via.placeholder.com/300x180' },
    { id: 7, title: 'Palha Italiana', type: 'Doces', img: 'https://via.placeholder.com/300x180' },
    { id: 8, title: 'Cheesecake', type: 'Doces', img: 'https://via.placeholder.com/300x180' },
    { id: 9, title: 'Brownie', type: 'Doces', img: 'https://via.placeholder.com/300x180' },
    { id: 10, title: 'Banoffee', type: 'Doces', img: 'https://via.placeholder.com/300x180' },
    
    // Salgados
    { id: 11, title: 'Espaguete à carbonara', type: 'Salgados', img: 'https://via.placeholder.com/300x180' },
    { id: 12, title: 'Coxinha de Frango', type: 'Salgados', img: 'https://via.placeholder.com/300x180' },
    { id: 13, title: 'Pão de Queijo', type: 'Salgados', img: 'https://via.placeholder.com/300x180' },
    { id: 14, title: 'Lasanha Bolonhesa', type: 'Salgados', img: 'https://via.placeholder.com/300x180' },
    { id: 15, title: 'Risoto de Camarão', type: 'Salgados', img: 'https://via.placeholder.com/300x180' },
    { id: 16, title: 'Empadão de Frango', type: 'Salgados', img: 'https://via.placeholder.com/300x180' },
    { id: 17, title: 'Quiche Lorraine', type: 'Salgados', img: 'https://via.placeholder.com/300x180' },
    { id: 18, title: 'Feijoada', type: 'Salgados', img: 'https://via.placeholder.com/300x180' },
    { id: 19, title: 'Pizza Margherita', type: 'Salgados', img: 'https://via.placeholder.com/300x180' },
    { id: 20, title: 'Cuzcuz de milho', type: 'Salgados', img: 'https://via.placeholder.com/300x180' },

    // Vegano
    { id: 21, title: 'Moqueca de Banana', type: 'Vegano', img: 'https://via.placeholder.com/300x180' },
    { id: 22, title: 'Strogonoff de Palmito', type: 'Vegano', img: 'https://via.placeholder.com/300x180' },
    { id: 23, title: '"Queijo" de Castanha', type: 'Vegano', img: 'https://via.placeholder.com/300x180' },
    { id: 24, title: 'Hambúrguer de Grão de Bico', type: 'Vegano', img: 'https://via.placeholder.com/300x180' },
    { id: 25, title: 'Torta Vegana de "Frango"', type: 'Vegano', img: 'https://via.placeholder.com/300x180' },
    { id: 26, title: 'Falafel Assado', type: 'Vegano', img: 'https://via.placeholder.com/300x180' },
    { id: 27, title: 'Guacamole', type: 'Vegano', img: 'https://via.placeholder.com/300x180' },
    { id: 28, title: 'Feijão Tropeiro Vegano', type: 'Vegano', img: 'https://via.placeholder.com/300x180' },
    { id: 29, title: 'Bolo Vegano de Chocolate', type: 'Vegano', img: 'https://via.placeholder.com/300x180' },
    { id: 30, title: 'Curry de Legumes', type: 'Vegano', img: 'https://via.placeholder.com/300x180' },
    
    // (Adicione mais 10 'Saudável' e 10 'Pratos' seguindo o modelo)
];

// ==========================================================
// 3. LÓGICA DO APP (Roda após o DOM carregar)
// ==========================================================
document.addEventListener('DOMContentLoaded', () => {

    // --- 3.1. Exibição do Nome do Usuário ---
    // (Esta parte roda em todas as páginas que incluem o app.js)
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const userNameElement = document.querySelector('.user-profile span'); // Pega o <span> do header

    if (userNameElement && currentUser) {
        // Coloca o nome do usuário (do localStorage) dentro do <span>
        userNameElement.textContent = currentUser.nome;
    }


    // --- 3.2. Lógica do Catálogo (index.html) ---
    // (Esta parte só roda se estivermos no index.html)

    if (document.body.classList.contains('page-catalogo')) { // <-- (Veja Passo 4)
        
        const recipeGrid = document.querySelector('.recipe-grid');
        const filterButtons = document.querySelectorAll('.recipe-filters .filter-btn');

        // Função para embaralhar um array (para pegar aleatórios)
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        // Função que RENDERIZA as receitas no HTML
        function renderRecipes(recipes) {
            recipeGrid.innerHTML = ''; // Limpa o grid

            if (recipes.length === 0) {
                recipeGrid.innerHTML = '<p>Nenhuma receita encontrada para esta categoria.</p>';
                return;
            }

            recipes.forEach(recipe => {
                // ATENÇÃO: O link <a> leva para reproducao.html
                // Estamos passando o ID da receita na URL (ex: ?id=1)
                const cardHTML = `
                    <a href="reproducao.html?id=${recipe.id}" class="recipe-card">
                        <img src="${recipe.img}" alt="${recipe.title}">
                        <div class="card-info">
                            <h3>${recipe.title}</h3>
                            <span class="likes">200</span>
                        </div>
                    </a>
                `;
                recipeGrid.innerHTML += cardHTML;
            });
        }

        // Função que MOSTRA as receitas baseado no filtro
        function showRecipes(filter) {
            let recipesToShow = [];
            const filterText = filter.toLowerCase(); // 'doces', 'salgados', 'em alta'

            if (filterText === 'em alta') {
                const types = ['Doces', 'Salgados', 'Vegano']; // (Adicione 'Saudável' e 'Pratos' aqui)
                
                types.forEach(type => {
                    const typeRecipes = db_recipes.filter(r => r.type === type);
                    const randomTwo = shuffleArray([...typeRecipes]).slice(0, 2); // Pega 2 aleatórios
                    recipesToShow.push(...randomTwo);
                });

            } else {
                // Converte 'doces' para 'Doces' (para bater com o DB)
                const capitalizedType = filterText.charAt(0).toUpperCase() + filterText.slice(1);
                
                recipesToShow = db_recipes.filter(r => r.type === capitalizedType).slice(0, 10); // Pega 10
            }

            renderRecipes(recipesToShow);
        }

        // Adiciona o clique nos botões de filtro
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove 'active' do botão antigo
                document.querySelector('.filter-btn.active').classList.remove('active');
                // Adiciona 'active' no botão clicado
                button.classList.add('active');

                // Mostra as receitas do filtro clicado
                showRecipes(button.textContent);
            });
        });

        // --- Carga Inicial ---
        // Mostra as receitas "Em Alta" assim que a página carrega
        showRecipes('Em Alta');
    }
    
    // --- 3.3. Lógica da Reprodução (reproducao.html) ---
    if (document.body.classList.contains('page-reproducao')) { // <-- (Veja Passo 4)
        
        // Lógica para pegar o ID da URL e carregar o vídeo
        const urlParams = new URLSearchParams(window.location.search);
        const recipeId = urlParams.get('id'); // Pega o ?id=1 da URL
        
        if (recipeId) {
            const recipe = db_recipes.find(r => r.id == recipeId);
            
            if (recipe) {
                // (Aqui você atualizaria o título, a descrição e o player do vídeo)
                const titleElement = document.querySelector('.video-title');
                if (titleElement) {
                    titleElement.textContent = recipe.title;
                }
                // (Adicione a lógica de carregar o <iframe> do YouTube aqui)
            } else {
                alert('Receita não encontrada.');
                window.location.href = 'index.html'; // Volta para o catálogo
            }
        }
    }
});