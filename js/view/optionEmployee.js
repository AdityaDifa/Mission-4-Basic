const OptionEmployee = (nameEmployee) => {
    const employeeOption = document.createElement('option');
    employeeOption.textContent = nameEmployee.name;
    employeeOption.value = nameEmployee.name;
    
    return employeeOption;
}

export default OptionEmployee;