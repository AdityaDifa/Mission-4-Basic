const CardList = (parent, nameValue, priorityValue, messageValue) => {

    const cardDiv = document.createElement('div');
    const employee = document.createElement('p');
    const priority = document.createElement('p');
    const message = document.createElement('p');

    //styling
    cardDiv.classList.add('listCard');
    cardDiv.appendChild(employee);
    cardDiv.appendChild(priority);
    cardDiv.appendChild(message);

    employee.textContent = nameValue;
    priority.textContent = priorityValue;
    message.textContent = messageValue;

    const parentDiv = document.getElementById(parent);
    parentDiv.append(cardDiv);
}

export default CardList