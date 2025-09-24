import { deleteEmployeeId } from "../model/employeeDatabase.js";

function cardEmployee(parent, employee){
    const parentDiv = document.getElementById(parent);

    const div = document.createElement("div");
    div.classList.add("employeeListCard");

    const divLeft = document.createElement("div")
    const divRight = document.createElement("div");

    const pName = document.createElement("p");
    pName.textContent = employee.name;
    pName.classList.add("font-bold","text-lg");

    const pPosition = document.createElement("p");
    pPosition.textContent = employee.position;

    const buttonDetele = document.createElement("button");
    buttonDetele.textContent = "delete";
    buttonDetele.classList.add("deleteButton");
    buttonDetele.addEventListener("click",()=>{
        deleteEmployeeId(employee.id);
        alert("data has been deleted");
        div.remove();
    })

    divLeft.appendChild(pName);
    divLeft.appendChild(pPosition);
    divRight.appendChild(buttonDetele);

    div.appendChild(divLeft);
    div.appendChild(divRight);

    parentDiv.appendChild(div);
}

export default cardEmployee;