document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('lang-toggle');
    let currentLang = 'pt'; // Define o idioma inicial

    toggleButton.addEventListener('click', () => {
        // Alterna entre 'pt' e 'en'
        currentLang = (currentLang === 'pt') ? 'en' : 'pt';
        
        // Define qual idioma deve ser o próximo 'ativo' e qual o próximo 'inativo'
        const nextLang = currentLang;
        const prevLang = (currentLang === 'pt') ? 'en' : 'pt';

        // 1. Esconde todos os elementos do idioma anterior
        document.querySelectorAll(`.lang-${prevLang}`).forEach(el => {
            el.classList.add('hidden');
            el.classList.remove('active');
        });

        // 2. Mostra todos os elementos do novo idioma
        document.querySelectorAll(`.lang-${nextLang}`).forEach(el => {
            el.classList.add('active');
            el.classList.remove('hidden');
        });
        
        // Opcional: Atualiza o texto do botão (ex: EN/PT)
        toggleButton.textContent = (currentLang === 'pt') ? 'EN / PT' : 'PT / EN';
    });
});