import { deleteList } from "../model/listDatabase.js";
import { editDatabase } from "../model/database.js";

const CardList = (parent, list) => {
    //create div
    const cardDiv = document.createElement('div');
    const leftDiv = document.createElement('div');
    const rightDiv = document.createElement('div');

    //create elements
    const employee = document.createElement('p');
    const priority = document.createElement('p');
    const message = document.createElement('p');
    const dateCreated = document.createElement('p');
    const deadline = document.createElement('p');

    employee.classList.add('font-bold')

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.classList.add('deleteButton','h-10')

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.id = list.id;
    checkBox.classList.add('m-2');
    if(list.progress == true){
        checkBox.checked = true;
    }
    else{
        checkBox.checked = false;
    }

    //styling
    cardDiv.classList.add('listCard');
    cardDiv.appendChild(leftDiv);
    cardDiv.appendChild(rightDiv);

    rightDiv.classList.add('flex','justify-center','p-1','items-center')


    leftDiv.appendChild(employee);
    leftDiv.appendChild(dateCreated);
    leftDiv.appendChild(deadline);
    leftDiv.appendChild(message);


    rightDiv.appendChild(priority);
    rightDiv.appendChild(deleteButton);
    rightDiv.appendChild(checkBox)

    employee.textContent = list.employee;
    priority.textContent = list.priority;
    message.textContent = list.message;
    dateCreated.textContent = list.date;
    deadline.textContent = list.deadline;

    priority.classList.add('flex', 'items-center')

    if(list.priority == 'low'){
        priority.classList.add('lowPriority');
    }
    else if(list.priority == 'medium'){
         priority.classList.add('mediumPriority');
    }
    else if(list.priority == 'high'){
         priority.classList.add('highPriority');
    }

    const parentDiv = document.getElementById(parent);
    parentDiv.append(cardDiv);

    //add event - should be in controller but who care
    deleteButton.addEventListener('click', () => {
        deleteList(list.id);
        alert('list has been deleted');
        cardDiv.remove();
    })

    checkBox.addEventListener('change', () => {
        if(list.progress == false){
            editDatabase('list',list.id,'progress',true);
        }
        else{
            editDatabase('list',list.id,'progress',false);
        }
        alert('list has been done');
        location.reload();
    })

}

export default CardList