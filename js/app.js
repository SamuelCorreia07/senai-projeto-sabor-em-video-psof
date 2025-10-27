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
    { id: 1, title: 'Brigadeiro', type: 'Doces', img: 'imagens/receitas/brigadeiro.webp', youtubeId: 'obL3IPdZKTo?si=tvYtxfWeFoGzyPfA', chefId: 1 },
    { id: 2, title: 'Bolo de cenoura', type: 'Doces', img: 'imagens/receitas/bolo_de_cenoura.webp', youtubeId: 'DjHPC-dEd8o?si=0411tZztLU4i_tkO', chefId: 4 },
    { id: 3, title: 'Pudim de Leite Condensado', type: 'Doces', img: 'imagens/receitas/pudim_de_leite_condensado.webp', youtubeId: 'olw3gMc4YlU?si=DGkN1YguqprEzjBc', chefId: 4 },
    { id: 4, title: 'Mousse de Maracujá', type: 'Doces', img: 'imagens/receitas/mousse_de_maracuja.webp', youtubeId: 'tKCvDIXp6FI?si=WxxpPm2HDk6Gjig_', chefId: 4 },
    { id: 5, title: 'Torta de Limão', type: 'Doces', img: 'imagens/receitas/torta_de_limao.webp', youtubeId: 'P3kCnRQNqYs?si=ItmVFQhg04KMnliY', chefId: 4 },
    { id: 6, title: 'Pudim de Iogurte', type: 'Doces', img: 'imagens/receitas/pudim_de_iogurte.avif', youtubeId: 'G8DMqk2HGAI?si=piEzaqnHWVVJe_Fd', chefId: 6 },
    { id: 7, title: 'Sorvete de Pé de Moleque', type: 'Doces', img: 'imagens/receitas/sorvete_de_pe_de_moleque.webp', youtubeId: 'Y2tw-DozZHY?si=1RVbJY9MJoT31WFX', chefId: 6 },
    { id: 8, title: 'Pavê de Morango', type: 'Doces', img: 'imagens/receitas/pave_de_morango.avif', youtubeId: 'HD7MK80XtPk?si=pfNxlSf5w20PCzwU', chefId: 1 },
    { id: 9, title: 'Palha Italiana', type: 'Doces', img: 'imagens/receitas/palha_italiana.webp', youtubeId: 'JSfHpJq0i0w?si=ddsSn85p15ojH_fd', chefId: 6 },
    { id: 10, title: 'Flan de Goiaba', type: 'Doces', img: 'imagens/receitas/flan_de_goiaba.jpg', youtubeId: 'PWO7IU8AoT4?si=aKEzD5zdlGaBAXNe', chefId: 1 },

    // Salgados
    { id: 11, title: 'Macarrão à carbonara', type: 'Salgados', img: 'imagens/receitas/macarrao_a_carbonara.webp', youtubeId: 'pgh38V5EAm4?si=mTPA8yz_S-CEZwel', chefId: 5 },
    { id: 12, title: 'Coxinha de Frango', type: 'Salgados', img: 'imagens/receitas/coxinha_de_frango.webp', youtubeId: '5u6f4Da-1Tg?si=z4wVtUJge4xYgm40', chefId: 1 },
    { id: 13, title: 'Pão de Queijo', type: 'Salgados', img: 'imagens/receitas/pao_de_queijo.webp', youtubeId: 'E9FF2-ch1tc?si=2hzLxngh17wBb7JJ', chefId: 3 },
    { id: 14, title: 'Lasanha à Bolonhesa', type: 'Salgados', img: 'imagens/receitas/lasanha_a_bolonhesa.webp', youtubeId: '-9Wp7NfeTBY?si=mN9ulE0POJ8PM5FW', chefId: 3 },
    { id: 15, title: 'Muffins Salgados', type: 'Salgados', img: 'imagens/receitas/muffins_salgados.webp', youtubeId: '5eqkrniYVFI?si=_uv7LGzmqTAMpLbY', chefId: 3 },
    { id: 16, title: 'Empadinhas', type: 'Salgados', img: 'imagens/receitas/empadinhas.webp', youtubeId: 'gtVWZ9p826Q?si=HcQt5D5uexL3jiz2', chefId: 3 },
    { id: 17, title: 'Provolone Assado', type: 'Salgados', img: 'imagens/receitas/provolone_assado.jpg', youtubeId: '6fRg6xOfEKo?si=KWyPSWuv-9ErDI6z', chefId: 3 },
    { id: 18, title: 'Enroladinho de Presunto e Queijo', type: 'Salgados', img: 'imagens/receitas/enroladinho_de_presunto_e_queijo.jpeg', youtubeId: '3u68zcpUClQ?si=Dlu-TCl9iBxPeKLs', chefId: 3 },
    { id: 19, title: 'Pizza Enrolada', type: 'Salgados', img: 'imagens/receitas/pizza_enrolada.webp', youtubeId: 'qrAjFa5Cw_4?si=gFwIuk5EcbbPu-9K', chefId: 3 },
    { id: 20, title: 'Cuscuz de milho', type: 'Salgados', img: 'imagens/receitas/cuscuz_de_milho.webp', youtubeId: 't3i9AVYlHq8?si=FtJ3lPmkPnhRv_VT', chefId: 2 },

    // Vegano
    { id: 21, title: 'Moqueca de Banana-da-Terra', type: 'Vegano', img: 'imagens/receitas/moqueca_de_banana_da_terra.webp', youtubeId: 'OAqPkYoi00s?si=_NMEXs8SLJ47dJDE', chefId: 5 },
    { id: 22, title: 'Strogonoff de Cogumelos com Palmito', type: 'Vegano', img: 'imagens/receitas/strogonoff_de_cogumelos_com_palmito.jpg', youtubeId: 'Hih9D7zOIKs?si=ca0aGey9PNT534ww', chefId: 4 },
    { id: 23, title: '"Queijo" de Castanha', type: 'Vegano', img: 'imagens/receitas/queijo_de_castanha.jpg', youtubeId: 'HPj4ECyvC1I?si=r4fZpbN1HneJNbu7', chefId: 5 },
    { id: 24, title: 'Hambúrguer de Grão de Bico', type: 'Vegano', img: 'imagens/receitas/hamburguer_de_grao_de_bico.avif', youtubeId: 'v30rGNce7iw?si=MjhBYJiWr7PoS5gt', chefId: 4 },
    { id: 25, title: 'Torta Salgada Vegana', type: 'Vegano', img: 'imagens/receitas/torta_salgada_vegana.webp', youtubeId: 'VvpdFEqdaZs?si=8cphwctGfoT-xjnH', chefId: 4 },
    { id: 26, title: 'Humus e Falafel', type: 'Vegano', img: 'imagens/receitas/humus_e_falafel.jpg', youtubeId: 'NyPJ99kllMU?si=KC9OijM9nfWBf_xr', chefId: 4 },
    { id: 27, title: 'Guacamole', type: 'Vegano', img: 'imagens/receitas/guacamole.webp', youtubeId: 'N49ag-DmpA0?si=xLzd5Q3vekLrzNkV', chefId: 5 },
    { id: 28, title: 'Feijão Tropeiro Vegano', type: 'Vegano', img: 'imagens/receitas/feijao_tropeiro_vegano.jpg', youtubeId: 'RTnFCrKpHjI?si=7gIuNb4WJFCYNehM', chefId: 5 },
    { id: 29, title: 'Bolo Vegano de Chocolate', type: 'Vegano', img: 'imagens/receitas/bolo_vegano_de_chocolate.webp', youtubeId: 'Qw7oh2gkR_k?si=B6Wj3v3tpL70-LjY', chefId: 4 },
    { id: 30, title: 'Curry de Legumes', type: 'Vegano', img: 'imagens/receitas/curry_de_legumes.webp', youtubeId: '_bLFOLYZ1i8?si=c7Q6kIA703bobh7R', chefId: 5 },

    // Saudável
    { id: 31, title: 'Salada de Quinoa', type: 'Saudável', img: 'imagens/receitas/salada_de_quinoa.jpg', youtubeId: '5np4Qc4ZQhc?si=xQduHGMhwDX25YYX', chefId: 4 },
    { id: 32, title: 'Salada de Batata', type: 'Saudável', img: 'imagens/receitas/salada_de_batata.avif', youtubeId: 'xe7J8tBMkvk?si=orgqkk9r6LBYYpcl', chefId: 4 },
    { id: 33, title: 'Peito de Frango Grelhado', type: 'Saudável', img: 'imagens/receitas/peito_de_frango_grelhado.webp', youtubeId: 'yurBZw-_1ws?si=02mbijCekTw0x-mM', chefId: 5 },
    { id: 34, title: 'Wrap Integral', type: 'Saudável', img: 'imagens/receitas/wrap_integral.jpeg', youtubeId: 'YaT9hXICIR8?si=n126QmqR63QOn5AX', chefId: 4 },
    { id: 35, title: 'Sopa Detox', type: 'Saudável', img: 'imagens/receitas/sopa_detox.webp', youtubeId: 'OB1affOJDPc?si=dIsSlSRhDWrceA_j', chefId: 4 },
    { id: 36, title: 'Iogurte com Granola', type: 'Saudável', img: 'imagens/receitas/iogurte_com_granola.jpg', youtubeId: 'lrpCST_wu_c?si=1NRd_cyvzyjc3d6I', chefId: 5 },
    { id: 37, title: 'Omelete Suflê', type: 'Saudável', img: 'imagens/receitas/omelete_sufle.webp', youtubeId: 'ekEEFxnYssQ?si=0wQ_3E2nHNJX2kai', chefId: 1 },
    { id: 38, title: 'Salada de Frutas', type: 'Saudável', img: 'imagens/receitas/salada_de_frutas.jpg', youtubeId: 'RtY5PW-8b7g?si=87cWquSVoD-z3hjN', chefId: 3 },
    { id: 39, title: 'Barrinha de Cereal Caseira', type: 'Saudável', img: 'imagens/receitas/barrinha_de_cereal_caseira.webp', youtubeId: 'u2AH6e3w0BA?si=L9Tza3HDQHNUKXup', chefId: 4 },
    { id: 40, title: 'Pudim de Chia', type: 'Saudável', img: 'imagens/receitas/pudim_de_chia.webp', youtubeId: 'pIw9eksj2CQ?si=Ls3GuyRtE11-X4KX', chefId: 1 },

    // Pratos
    { id: 41, title: 'Frango ao Limão', type: 'Pratos', img: 'imagens/receitas/frango_ao_limao.webp', youtubeId: 'zIDRTvXV4pM?si=w6hPieu9SQhofIVl', chefId: 6 },
    { id: 42, title: 'Carne de Panela', type: 'Pratos', img: 'imagens/receitas/carne_de_panela.jpg', youtubeId: 'vO2cR7DoUKE?si=DNnOxTeUsbBCagVT', chefId: 7 },
    { id: 43, title: 'Peixe Frito ao Molho Tártaro', type: 'Pratos', img: 'imagens/receitas/peixe_frito_ao_molho_tartaro.avif', youtubeId: 'njz7lWPwPdI?si=tQKSys1GyaRnbYC9', chefId: 7 },
    { id: 44, title: 'Arroz à Grega', type: 'Pratos', img: 'imagens/receitas/arroz_a_grega.webp', youtubeId: 'mNf2nGNKas0?si=BW8Loy6hn8QP350k', chefId: 4 },
    { id: 45, title: 'Escondidinho de Carne Seca', type: 'Pratos', img: 'imagens/receitas/escondidinho_de_carne_seca.webp', youtubeId: '1I8jp7U9bjg?si=p_IozM54H3iZeu8c', chefId: 5 },
    { id: 46, title: 'Feijoada', type: 'Pratos', img: 'imagens/receitas/feijoada.webp', youtubeId: '2SpzVuUlwDg?si=zO1ULK3Sq_ZQjfjW', chefId: 4 },
    { id: 47, title: 'Risoto de Palmito', type: 'Pratos', img: 'imagens/receitas/risoto_de_palmito.webp', youtubeId: '6m0AilGYa00?si=mYEadjjz_MahRsdp', chefId: 1 },
    { id: 48, title: 'Salpicão de Frango', type: 'Pratos', img: 'imagens/receitas/salpicao_de_frango.webp', youtubeId: 'WQPLlAff_6o?si=Fx6q3Ywr-zrrAGvh', chefId: 7 },
    { id: 49, title: 'Estrogonofe de Filé Mignon', type: 'Pratos', img: 'imagens/receitas/estrogonofe_de_file_mignon.jpg', youtubeId: 'xfZ4NIcRO-c?si=qxtcoA3M1s2uTpns', chefId: 8 },
    { id: 50, title: 'Filé Mignon ao Molho Madeira', type: 'Pratos', img: 'imagens/receitas/file_mignon_ao_molho_madeira.avif', youtubeId: 'IhbznCA_6Kk?si=GQgnx6yEA-1Z3Yky', chefId: 4 },
];

// Banco de dados de chefs
const db_chefs = [
    { id: 1, name: 'Palmirinha Onofre', img: 'imagens/chefs/palmirinha_onofre.jpg' },
    { id: 2, name: 'Receitas Fáceis Meu Sertão', img: 'imagens/chefs/RECEITAS_FACEIS_MEU_SERTAO.jpg' },
    { id: 3, name: 'Tata Pereira', img: 'imagens/chefs/tata_pereira.jpg' },
    { id: 4, name: 'Chef Convidado', img: 'imagens/account_circle_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg' },
    { id: 5, name: 'Receitas', img: 'imagens/chefs/receitas.jpg' },
    { id: 6, name: 'Ana Maria Braga', img: 'imagens/chefs/ana_maria_braga.webp' },
    { id: 7, name: 'Paola Carosella', img: 'imagens/chefs/paola_carosella.jpg' },
    { id: 8, name: 'Erick Jacquin', img: 'imagens/chefs/erick_jacquin.jpg' }
];

// Banco de dados de comentários
const db_comments = [
    { username: '@Lucas', commentText: 'Deu super certo!' },
    { username: '@MariaC', commentText: 'Amei a receita! Fiz aqui em casa e ficou uma delícia.' },
    { username: '@ChefDoFimDeSemana', commentText: 'Dica: adicionei um pouco de raspas de limão e ficou ótimo.' },
    { username: '@AnaJulia', commentText: 'Maravilhoso! O chef explica muito bem, vídeo nota 10.' },
    { username: '@Rodrigo_S', commentText: 'Vou tentar fazer amanhã! Parece fácil e delicioso.' },
    { username: '@FernandaL', commentText: 'Perfeito! Rápido e prático para o dia a dia.' },
    { username: '@GourmetIniciante', commentText: 'O meu queimou um pouco, mas o sabor ficou bom. Vou tentar de novo kkkk' },
    { username: '@TiaCidaReceitas', commentText: 'Que saudade dessa receita, me lembrou minha avó.' }
];

// ==========================================================
// FUNÇÃO UTILITÁRIA (Embaralhar)
// ==========================================================
function shuffleArray(array) {
    // Copia o array para não modificar o original
    const shuffledArray = [...array]; 
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

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
                const types = ['Doces', 'Salgados', 'Vegano', 'Saudável', 'Pratos']; // (Adicione 'Saudável' e 'Pratos' aqui)
                
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

        // --- Lógica da Sidebar de "Últimos Recebidos" ---
        const sidebarList = document.getElementById('ultimos-recebidos-list');
        // Lista com todos os tipos que queremos exibir na sidebar
        const recipeTypes = ['Doces', 'Salgados', 'Vegano', 'Saudável', 'Pratos']; 
        
        if (sidebarList) {
            recipeTypes.forEach(type => {
                // Encontra a *primeira* receita de cada tipo
                const recipe = db_recipes.find(r => r.type === type);
                
                if (recipe) {
                    const li = document.createElement('li');
                    // Cria o link <li>...</li> para a receita
                    li.innerHTML = `
                        <a href="reproducao.html?id=${recipe.id}">
                            <img src="${recipe.img}" alt="${recipe.title}">
                            <span>${recipe.title}</span>
                        </a>
                    `;
                    sidebarList.appendChild(li);
                }
            });
        }

        // Encontra a lista de chefs no HTML
        const chefList = document.getElementById('chefs-list-js');
        
        if (chefList) {
            chefList.innerHTML = ''; // Limpa a lista

            // 2. Itera sobre o banco de dados de chefs
            db_chefs.forEach(chef => {
                
                // 3. Encontra a primeira receita associada a este chef
                const firstRecipe = db_recipes.find(recipe => recipe.chefId === chef.id);
                
                // 4. Define o link (href)
                // Se o chef tiver uma receita, linka para ela. Se não, linka para "#".
                const link = firstRecipe ? `reproducao.html?id=${firstRecipe.id}` : '#';
                
                // 5. Cria o HTML do item da lista
                const li = document.createElement('li');
                li.innerHTML = `
                    <a href="${link}">
                        <img src="${chef.img}" alt="${chef.name}" class="profile-pic"> 
                        <span>${chef.name}</span>
                    </a>
                `;

                // 6. Adiciona o item à lista no HTML
                chefList.appendChild(li);
            });
        }
    }
    
    // --- 3.3. Lógica da Reprodução (reproducao.html) ---
    if (document.body.classList.contains('page-reproducao')) { 
        
        const urlParams = new URLSearchParams(window.location.search);
        const recipeId = urlParams.get('id'); // Pega o ID da URL (ex: "5")

        // Converter o ID da URL (texto) para número
        const recipeIdNum = Number(recipeId);
        
        // Pega o elemento <ul> que preparamos no HTML
        const recommendationList = document.getElementById('recommendation-list-js');

        if (recipeIdNum && db_recipes.length > 0) {
            
            // Encontra a receita principal
            const recipe = db_recipes.find(r => r.id === recipeIdNum);
            
            if (recipe) {
                // Atualiza o título da página
                const titleElement = document.querySelector('.video-title');
                if (titleElement) {
                    titleElement.textContent = recipe.title;
                }
                // Encontra o <iframe> que colocamos no HTML
                const player = document.getElementById('youtube-player');
                
                // Pega o ID do YouTube do nosso banco de dados
                const videoId = recipe.youtubeId;

                // Monta a URL de "embed"
                const embedUrl = `https://www.youtube.com/embed/${videoId}`;

                // Atualiza o <iframe>
                if (player && videoId && videoId !== "USE_SEU_ID_AQUI") {
                    player.setAttribute('src', embedUrl);
                    player.setAttribute('title', recipe.title); // Bom para acessibilidade
                } else if (player) {
                    // Se o ID não foi preenchido, mostra uma mensagem
                    player.parentElement.innerHTML = "<h1>Vídeo não disponível.</h1>";
                }

                // Encontra o Chef
                // Usamos o recipe.chefId (ex: 3) para buscar no db_chefs
                const chef = db_chefs.find(c => c.id === recipe.chefId);
                
                // 5. Encontra o container do chef no HTML
                const chefInfoBox = document.getElementById('chef-info-box');

                // 6. Preenche o HTML do chef
                if (chef && chefInfoBox) {
                    chefInfoBox.innerHTML = `
                        <img src="${chef.img}" alt="${chef.name}" class="chef-avatar">
                        <div>
                            <a href="#" class="chef-name">${chef.name}</a>
                        </div>
                    `;
                } else if (chefInfoBox) {
                    chefInfoBox.innerHTML = "<p>Chef não informado.</p>";
                }


                // Função para gerar número aleatório
                function getRandomInt(min, max) {
                    min = Math.ceil(min);
                    max = Math.floor(max);
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }

                // Atualiza Visualizações Aleatórias
                const viewCountEl = document.getElementById('view-count-js');
                if (viewCountEl) {
                    viewCountEl.textContent = getRandomInt(10, 500); // Ex: 10k a 500k
                }

                // Atualiza Likes Aleatórios
                const likeCountEl = document.getElementById('like-count-js');
                if (likeCountEl) {
                    likeCountEl.textContent = getRandomInt(1, 99); // Ex: 1k a 99k
                }

                // Lógica do "...mais" (Lorem Ipsum)
                const toggleBtn = document.getElementById('toggle-description');
                const descriptionBox = document.getElementById('video-full-description');
                
                // Texto Lorem Ipsum
                const loremIpsumText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Proin vel justo nec ligula sollicitudin scelerisque. 
Nulla facilisi. Integer feugiat, elit nec congue iaculis, 
nunc arcu tincidunt dolor, sit amet semper libero velit 
ut eros. 

Ingredientes:
- 2 xícaras de...
- 1 colher de...
- 500g de...

Modo de preparo:
Morbi euismod, justo ac ultrices varius, nisl erat 
luctus diam, eu vehicula velit odio vel est. 
Quisque mattis, justo in commodo.
                `;

                // Adiciona o evento de clique no botão
                if (toggleBtn && descriptionBox) {
                    toggleBtn.addEventListener('click', (e) => {
                        e.preventDefault(); // Impede o link de pular a página
                        
                        // Define o texto, mostra a caixa e esconde o botão
                        descriptionBox.textContent = loremIpsumText;
                        descriptionBox.style.display = 'block';
                        toggleBtn.style.display = 'none';
                    });
                }

                // Encontra o container da lista de comentários
                const commentListContainer = document.getElementById('comment-list-js');

                if (commentListContainer) {
                    const numCommentsToShow = 3; // Quantos comentários aleatórios mostrar

                    // Embaralha o DB de comentários e pega os 3 primeiros
                    const randomComments = shuffleArray(db_comments).slice(0, numCommentsToShow);

                    // Limpa a lista (caso tenha algo)
                    commentListContainer.innerHTML = '';

                    // Cria e insere o HTML para cada comentário
                    randomComments.forEach(comment => {
                        // (Usando a mesma estrutura que o CSS espera)
                        const commentHTML = `
                            <div class="comment">
                                <p><strong>${comment.username}:</strong> ${comment.commentText}</p>
                            </div>
                        `;
                        commentListContainer.innerHTML += commentHTML;
                    });
                }


                // Popula as recomendações (SE a lista existir)
                if (recommendationList) {
                    // Limpa a lista (caso tenha algo)
                    recommendationList.innerHTML = '';

                    const numRecommendations = 4; // Quantos vídeos recomendar

                    // Filtra o DB para pegar TODAS as receitas, EXCETO a atual
                    const otherRecipes = db_recipes.filter(r => r.id !== recipeIdNum);

                    // Embaralha as outras receitas e pega as 4 primeiras
                    const randomRecommendations = shuffleArray(otherRecipes).slice(0, numRecommendations);

                    // Cria o HTML para cada recomendação
                    randomRecommendations.forEach(rec => {
                        const li = document.createElement('li');
                        li.innerHTML = `
                            <a href="reproducao.html?id=${rec.id}" class="recommendation-card">
                                <div class="card-thumbnail">
                                    <img src="${rec.img}" alt="${rec.title}">
                                    <span class="video-duration">20:45</span>
                                </div>
                                <div class="card-info">
                                    <h4>${rec.title}</h4>
                                </div>
                            </a>
                        `;
                        recommendationList.appendChild(li);
                    });
                } else {
                    // Isso é um aviso para NÓS (desenvolvedores)
                    console.error("Erro: O elemento #recommendation-list-js não foi encontrado no HTML.");
                }
            } else {
                alert('Receita não encontrada.');
                window.location.href = 'index.html'; 
            }
        } else {
            alert('ID da receita não fornecido ou inválido.');
            window.location.href = 'index.html';
        }
    }
});