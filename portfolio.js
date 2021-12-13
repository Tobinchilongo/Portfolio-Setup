let menu_button = document.querySelector(".mobile-nav");
menu_button.addEventListener("click", openMenu);

function openMenu() {
  let mobile_menu = document.querySelector(".navbar-mobile");
  mobile_menu.classList.remove("navbar_hidden");
}

let menu_close_button = document.querySelector(".navbar-mobile-close");
menu_close_button.addEventListener("click", closeMenu);

function closeMenu() {
  let mobile_navbar = document.querySelector(".navbar-mobile");
  mobile_navbar.classList.add("navbar_hidden");
}
