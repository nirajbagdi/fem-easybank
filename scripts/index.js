const iconMenuOpen = document.getElementById('icon-hamburger');
const iconMenuClose = document.getElementById('icon-close');
const header = document.querySelector('.header');

const showMenu = () => header.classList.add('show-menu');
const hideMenu = () => header.classList.remove('show-menu');

iconMenuOpen.addEventListener('click', showMenu);
iconMenuClose.addEventListener('click', hideMenu);
