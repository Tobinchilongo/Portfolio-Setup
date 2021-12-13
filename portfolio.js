let menu_button = document.querySelector(".mobile-nav");
menu_button.addEventListener("click", openMenu);

function openMenu() {
    let mobile_menu = document.querySelector(".navbar-mobile")
    mobile_menu.classList.remove("navbar_hidden");
}