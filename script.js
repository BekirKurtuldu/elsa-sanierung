// Smooth Scrolling für Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky Navigation
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.main-nav');
    if (window.scrollY > 100) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

// CTA Button Event
document.querySelector('.cta-button').addEventListener('click', function() {
    // Hier können Sie die Aktion für den "Schaden melden" Button definieren
    alert('Bitte rufen Sie uns an unter: 0155 66 14 30 70');
}); 