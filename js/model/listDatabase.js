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

const addList = (employee, priority, message)=>{
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
        'date': date
    }

    lists.push(list);
    addDatabase(key,lists);

    idList = idList + 1; //tambahkan key
    addDatabase(idKey,idList)

}

export {addList, getLists};