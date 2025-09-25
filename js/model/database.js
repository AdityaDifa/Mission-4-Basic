const checkDatabase = (key)=>{
    if(localStorage.getItem(key) === null){return false}
    else{return true}
}
const getDatabase = (key)=>{
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}
const addDatabase = (key,items)=>{
    localStorage.setItem(key,JSON.stringify(items));
}
const editDatabase = (key, id, keyData, valueData) => {
    let items = getDatabase(key);
    items = items.map(item => item.id === id ? {...item, [keyData] : valueData} : item);
    addDatabase(key, items);
}


export {getDatabase,checkDatabase,addDatabase, editDatabase};