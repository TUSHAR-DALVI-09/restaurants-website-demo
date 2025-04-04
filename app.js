ScrollReveal({ 
    distance: '100px',
    duration: 3000,
    delay: 200,
});

ScrollReveal().reveal('.navbar', { origin: 'top' });
// ScrollReveal().reveal('.contact form', { origin: 'button' });
ScrollReveal().reveal('#home, #menu-sec, #reviews, .menu-container,#blog-sec',{ origin: 'bottom' });