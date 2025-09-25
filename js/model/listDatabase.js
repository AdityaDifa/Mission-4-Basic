import { getDatabase,checkDatabase,addDatabase } from "./database.js";

const key = "list";
const idKey = "listId";

const getLists = () =>{
    if(checkDatabase(key)){
            return getDatabase(key);
        }
        else{
            return [];
        }
}

const addList = (employee, priority, message,deadline)=>{
    let idList = 1;
    let lists = [];
    let date = new Date();
    
    if(checkDatabase(key)){ //jika ada database
        idList = parseInt(getDatabase(idKey)); //ganti id ke terbaru
        lists = getDatabase(key);
    }

    const list = {
        "id":idList,
        'employee':employee,
        'priority':priority,
        'message':message,
        'date': date,
        'deadline':deadline,
        'progress':false
    }

    lists.push(list);
    addDatabase(key,lists);

    idList = idList + 1; //tambahkan key
    addDatabase(idKey,idList)

}

const deleteList = (idList) => {
    let lists = [];
        
        if(checkDatabase(key)){
            lists = getDatabase(key);
            lists = lists.filter(list => list.id !== idList);
    
            addDatabase(key,lists);
        }
        else{
            return [];
        }
}

export {addList, getLists, deleteList};