document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#video').scrollIntoView({ behavior: 'smooth' });
});
