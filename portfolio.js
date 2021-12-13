const menuButton = document.querySelector('.mobile-nav');
menuButton.addEventListener('click', openMenu);

function openMenu() {
  const mobileMenu = document.querySelector('.navbar-mobile');
  mobileMenu.classList.remove('navbar_hidden');
}

function closeMenu() {
    const mobileNavbar = document.querySelector('.navbar-mobile');
    mobileNavbar.classList.add('navbar_hidden');
  }
const menuCloseButton = document.querySelector('.navbar-mobile-close');
menuCloseButton.addEventListener('click', closeMenu);

