import { addEmployee } from "../model/employeeDatabase.js";

const name = document.getElementById("name");
const position = document.getElementById("position");
const submitButton = document.getElementById("submitButton");


submitButton.addEventListener("click", () => {
    addEmployee(name.value,position.value);
})