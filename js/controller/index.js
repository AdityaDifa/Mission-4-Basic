import changePage from '../view/changePage.js';

const addListButton = document.getElementById("addListButton");
const addEmployeeButton = document.getElementById("addEmployeeButton");
const navbar = document.getElementById("navbarButton");
const navbarMenu = document.getElementById("navbarMenu");

addListButton.addEventListener("click", () => changePage("./pages/addList.html"));
addEmployeeButton.addEventListener("click", () => changePage("./pages/addEmployee.html"));

navbar.addEventListener("click", () => navbarMenu.classList.toggle("hidden"));
navbarMenu.addEventListener("click", () => changePage("./pages/checkEmployee.html"))