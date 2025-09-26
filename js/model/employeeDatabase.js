import { getDatabase,checkDatabase,addDatabase,deleteAll } from "./database.js";

const key = "employees";
const idKey = "idEmployees";

const addEmployee = (name, position)=>{
    let idEmployees = 1;
    let employees = [];
    
    if(checkDatabase(key)){ //jika ada database
        idEmployees = parseInt(getDatabase(idKey)); //ganti id ke terbaru
        employees = getDatabase(key);
    }

    const employee = {
        "id":idEmployees,
        "name":name,
        "position":position
    }

    employees.push(employee);
    addDatabase(key,employees);

    idEmployees = idEmployees + 1; //tambahkan key
    addDatabase(idKey,idEmployees)

}
const getEmployees = () => {
    if(checkDatabase(key)){
        return getDatabase(key);
    }
    else{
        return [];
    }
}

const deleteEmployeeId = (idEmployee) => {
    let employees = [];
    
    if(checkDatabase(key)){
        employees = getDatabase(key);
        employees = employees.filter(employee => employee.id !== idEmployee);

        addDatabase(key,employees);
    }
    else{
        return [];
    }
}

const deleteAllEmployees = () => {
    deleteAll(key);
    deleteAll(idKey);
}

export {addEmployee,getEmployees,deleteEmployeeId,deleteAllEmployees};
