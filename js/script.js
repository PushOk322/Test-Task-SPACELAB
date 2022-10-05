const iconMenu = document.querySelector('.menu-icon');
if (iconMenu) {
    const menuPart = document.querySelector('.header__part');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuPart.classList.toggle('_active');
    });
}






