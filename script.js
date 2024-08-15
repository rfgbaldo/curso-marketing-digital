document.addEventListener('DOMContentLoaded', function() {
    // Função de Rolagem Suave para o Botão CTA
    const ctaButton = document.querySelector('.cta-button');
    const videoSection = document.querySelector('#video'); // Certifique-se de que o elemento alvo tenha o ID 'video'

    if (ctaButton && videoSection) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            videoSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Funcionalidade de Expandir/Colapsar para as Perguntas Frequentes (FAQ)
    const faqs = document.querySelectorAll('.faq h3');
    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            const answer = faq.nextElementSibling;
            if (answer) {
                answer.classList.toggle('visible');
            }
        });
    });
});
