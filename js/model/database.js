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

export {getDatabase,checkDatabase,addDatabase};