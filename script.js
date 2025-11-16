// 1. Obtenha referências para os elementos
const cardSabores = document.getElementById('card-2'); // Você precisará dar um ID ao seu card de Sabores
const modalSabores = document.getElementById('details-sabores-locais');
const backButton = modalSabores.querySelector('.back-button');

// 2. Função para abrir o modal
cardSabores.addEventListener('click', () => {
    modalSabores.style.display = 'flex';
});

// 3. Função para fechar o modal
backButton.addEventListener('click', () => {
    modalSabores.style.display = 'none';
});

// 1. Obtenha referências para os elementos

const cardPontosTuristicos = document.getElementById('card-1'); // Você precisará dar um ID ao seu card de Sabores
const modalPontosTuristicos = document.getElementById('details-pontos-turisticos');
const backButton2 = modalPontosTuristicos.querySelector('.back-button');

// 2. Função para abrir o modal
cardPontosTuristicos.addEventListener('click', () => {
    modalPontosTuristicos.style.display = 'flex';
});

backButton2.addEventListener('click', () => {
    modalPontosTuristicos.style.display = 'none';
});


const cardMusicaSport = document.getElementById('card-3'); // Você precisará dar um ID ao seu card de Sabores
const modalMusicaSport = document.getElementById('details-musicas-sport');
const backButton3 = modalMusicaSport.querySelector('.back-button');

// 2. Função para abrir o modal
cardMusicaSport.addEventListener('click', () => {
    modalMusicaSport.style.display = 'flex';
});

backButton3.addEventListener('click', () => {
    modalMusicaSport.style.display = 'none';
});
