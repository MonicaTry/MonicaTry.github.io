// Select elements
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');

// Open menu
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

// Close menu
closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});
