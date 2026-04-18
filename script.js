document.addEventListener("DOMContentLoaded", () => {

    let toggle = document.getElementById("menu-toggle");
    let menu = document.getElementById("menu");

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }

});
