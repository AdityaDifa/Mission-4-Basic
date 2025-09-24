import { addEmployee } from "../model/employeeDatabase.js";
import changePage from "../view/changePage.js";

const name = document.getElementById("name");
const position = document.getElementById("position");
const submitButton = document.getElementById("submitButton");


submitButton.addEventListener("click", () => {
    addEmployee(name.value,position.value);
    alert("data has been added");
    changePage("../../../index.html");
})