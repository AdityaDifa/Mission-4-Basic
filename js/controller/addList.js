import { addList } from "../model/listDatabase.js";
import {getEmployees} from "../model/employeeDatabase.js";
import option from "../view/optionEmployee.js";

//priority list
const priority = document.getElementById('priority')

priority.addEventListener('change', (event) => {
    priority.classList.remove('bg-yellow-200','bg-orange-300','bg-red-400');
    if(priority.value == 'low'){priority.classList.add('bg-yellow-200')}
    else if(priority.value == 'medium'){priority.classList.add('bg-orange-300')}
    else if(priority.value == 'high'){priority.classList.add('bg-red-400')}
})

//employees list
const selectEmployee = document.getElementById('selectEmployee')
const employees = getEmployees();

employees.forEach(employee => {
    let optionEmployee = option(employee);
    selectEmployee.appendChild(optionEmployee);
})

const submitButton = document.getElementById('submitButton');
//submit button
submitButton.addEventListener('click', () =>{
    const dateChoose = document.getElementById('deadline');
    const deadline = new Date(dateChoose.value)
    const message = document.getElementById("textList");
    addList(selectEmployee.value,priority.value, message.value,deadline);
    alert('list has been added');
})