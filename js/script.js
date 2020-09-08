const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
    console.log("Dsadas");
    nav.classList.toggle("slide");
});

var scrollEventHandler = function () {
    window.scroll(0, window.pageYOffset);
};

window.addEventListener("scroll", scrollEventHandler, false);
