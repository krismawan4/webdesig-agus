const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
    console.log("Dsadas");
    nav.classList.toggle("slide");
});
