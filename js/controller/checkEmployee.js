import changePage from '../view/changePage.js';

const navbar = document.getElementById("navbarButton");
const navbarMenu = document.getElementById("navbarMenu");

navbar.addEventListener("click", () => navbarMenu.classList.toggle("hidden"));
navbarMenu.addEventListener("click", () => changePage(""))