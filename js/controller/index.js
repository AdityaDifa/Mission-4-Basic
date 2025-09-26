import changePage from '../view/changePage.js';
import { getLists } from '../model/listDatabase.js';
import CardList from '../view/cardList.js';
import { deleteAllList } from '../model/listDatabase.js';

//navbar list menu
const addListButton = document.getElementById("addListButton");
const addEmployeeButton = document.getElementById("addEmployeeButton");
const navbar = document.getElementById("navbarButton");
const navbarMenu = document.getElementById("navbarMenu");

addListButton.addEventListener("click", () => changePage("./pages/addList.html"));
addEmployeeButton.addEventListener("click", () => changePage("./pages/addEmployee.html"));

navbar.addEventListener("click", () => navbarMenu.classList.toggle("hidden"));
navbarMenu.addEventListener("click", () => changePage("./pages/checkEmployee.html"))

//list view
const lists = getLists();

lists.forEach(list => {
    const dateNow = new Date();
    const dateList = new Date(list.deadline);

    if (list.progress === true) {
        CardList('done', list);
    } 
    else if (dateList > dateNow) {
        CardList('onProgress', list);
    } 
    else if (dateList < dateNow) {
        CardList('late', list);
    }
});

//delete all button
const deleteAllButton = document.getElementById('deleteAllButton');
deleteAllButton.addEventListener('click',()=> {
    const confirmDeleteAll = confirm('are you sure want to delete all lists ?');

    if(confirmDeleteAll){
        deleteAllList();
        changePage("./pages/checkEmployee.html");
    }
})

