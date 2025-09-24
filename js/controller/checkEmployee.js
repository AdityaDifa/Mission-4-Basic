import changePage from '../view/changePage.js';
import cardEmployee from '../view/cardEmployee.js';
import { getEmployees } from '../model/employeeDatabase.js';

//for navbar list memu
const navbar = document.getElementById("navbarButton");
const navbarMenu = document.getElementById("navbarMenu");

navbar.addEventListener("click", () => navbarMenu.classList.toggle("hidden"));
navbarMenu.addEventListener("click", () => changePage(""))

//for list employees
const employees = getEmployees();
console.log(employees);
employees.forEach(employee => {
    cardEmployee("listEmployees",employee);
})