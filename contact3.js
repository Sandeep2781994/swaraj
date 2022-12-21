const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".dropdown");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");

})