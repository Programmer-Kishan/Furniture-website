// Navbar Section
const navbar = document.querySelector('.navbar');
const hamburgerBtn = document.querySelector('.hamburger-btn');

// Home Section
const home = document.getElementById('home')

// About Section
const aboutCard = document.querySelectorAll('.about-div-child');

// console.log(hamburgerBtn);
hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    navbar.classList.toggle('active');
});
