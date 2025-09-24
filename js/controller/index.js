import changePage from '../view/changePage.js';
import { getLists } from '../model/listDatabase.js';
import CardList from '../view/cardList.js';

//navbar list menu
const addListButton = document.getElementById("addListButton");
const addEmployeeButton = document.getElementById("addEmployeeButton");
const navbar = document.getElementById("navbarButton");
const navbarMenu = document.getElementById("navbarMenu");

addListButton.addEventListener("click", () => changePage("./pages/addList.html"));
addEmployeeButton.addEventListener("click", () => changePage("./pages/addEmployee.html"));

navbar.addEventListener("click", () => navbarMenu.classList.toggle("hidden"));
navbarMenu.addEventListener("click", () => changePage("./pages/checkEmployee.html"))

//list view
const lists = getLists();
lists.forEach(list => {
    console.log(list.employee)
    CardList('onProgress',list.employee, list.priority, list.message)
})
