//  Global variables

let workday1 = [];
let localStorageKey

//class

class TodoItem{
    constructor(label, checkbox, textDecoration){
        this.label = label;
        this.checkbox = checkbox;
        this.textDecoration = textDecoration;
    }
}

// Local Storage keys list makes options list

let lsKeysArray = [];

function makeLSKeysArray(){
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        lsKeysArray.push(key);
    }
}

function displayOptionList(){
    makeLSKeysArray();    
    for(let i=0; i<lsKeysArray.length; i++){
    let option = document.createElement("option");
    option.innerText = lsKeysArray[i];
    document.querySelector("select").prepend(option);
    }
}

window.addEventListener("load", displayOptionList, setLocalStorageKey);

// Add to do List

function setLocalStorageKey(){
    let option = document.querySelectorAll("option");
    for (let i=0; i<option.length; i++){
        if (option[i].selected == true){
            localStorageKey = option[i].innerText;
        }
    }
}

function addTodoList(){
    let option = document.createElement("option");
    document.querySelector("select").prepend(option);
    option.innerText = document.querySelectorAll("input")[0].value;
    document.querySelector("option").selected = true;
    setLocalStorageKey();
    clearList();
    createDiv();
}

document.querySelectorAll('button')[0].addEventListener("click", addTodoList);

// Display To Do List from local storage

function clearList(){
    var elem = document.querySelector("div#toDel");
    
    elem.remove();
}

function createDiv(){
    let div = document.createElement("div");
    document.querySelector("div.main_content").append(div);
    document.querySelector("div.main_content").lastChild.setAttribute("id", "toDel");
    }

let cameArray = [];//////////////

function pushCameArray(){
    setLocalStorageKey();
    cameArray = [];
    for(let i=0; i<JSON.parse(localStorage.getItem(localStorageKey)).length; i++){
        cameArray.push(JSON.parse(localStorage.getItem(localStorageKey))[i]);
    }
}

function displayToDoList(){
    setLocalStorageKey();
    clearList();
    createDiv();
    pushCameArray();

    let div = document.createElement("div");
    document.querySelector("div#toDel").append(div);

    for(let i=0; i<cameArray.length; i++){
    document.querySelector("div#toDel").lastChild.innerHTML += 
    `<div class="add_todo btnParent" id="add_todo">
    <div>
        <label for="todo" class="label" style="text-decoration:${cameArray[i].textDecoration}">
        <input type="checkbox" name="todo" id="" class="checkbox" data-index="${i}" onclick="checkCheckbox()">
        ${cameArray[i].label}</label>
    </div>
        <button class="button3" data-index="${i}" onclick="minusItem()">
            <p class="in_button"></p>
        </button>
    </div>`;
    if(cameArray[i].checkbox == true){
        document.querySelector("div#toDel").lastChild.lastChild.querySelector("input").setAttribute("checked", "checked");
    }
    }
}

document.querySelector('select').addEventListener("click", displayToDoList);

// Create to do item input 

function createItemOblect(){
    let label = document.querySelectorAll("input")[1].value;
    let isChecked = document.querySelector("div#toDel").lastChild.querySelector("input").checked;
    let textDecoration = document.querySelector("div#toDel").lastChild.querySelector("label").getAttribute("style");
    
    let object = new TodoItem(label, isChecked, textDecoration);

    if (localStorage.hasOwnProperty(localStorageKey) == true){
        pushCameArray();
        workday1 = cameArray;
    }
    workday1.push(object);
    setLocalStorageKey();
       
    localStorage.setItem(localStorageKey, JSON.stringify(workday1));
}

function createTodoItem() {
    let todoValue = document.querySelectorAll("input")[1].value;
    if (localStorage.hasOwnProperty(localStorageKey) == true){
    displayToDoList();
    document.querySelector("div#toDel").innerHTML += 
    `<div class="add_todo" id="add_todo">
    <div>
        <label for="todo" class="label" style="text-decoration:none">
        <input type="checkbox" name="todo" id="" class="checkbox" data-index="${++cameArray.length}" onclick="checkCheckbox()">
        ${todoValue}</label>
    </div>
        <button class="button3" data-index="${++cameArray.length}"  onclick="minusItem()">
            <p class="in_button"></p>
        </button>
    </div>`;
    }else if(localStorage.hasOwnProperty(localStorageKey) == false){
    document.querySelector("div#toDel").innerHTML += 
    `<div class="add_todo" id="add_todo">
    <div>
        <label for="todo" class="label" style="text-decoration:none">
        <input type="checkbox" name="todo" id="" class="checkbox" data-index="0" onclick="checkCheckbox()">
        ${todoValue}</label>
    </div>
        <button class="button3" data-index="0" onclick="minusItem()">
            <p class="in_button"></p>
        </button>
    </div>`;
    }
    createItemOblect();
}

document.querySelectorAll('button')[1].addEventListener("click", createTodoItem);

//Delete to do item



function minusItem(){
    let elem = event.currentTarget.dataset.index;
    let elemParent = event.currentTarget.parentElement;
    elemParent.remove();
    pushCameArray();
    cameArray.splice(elem, 1);
    localStorage.setItem(localStorageKey, JSON.stringify(cameArray));
}

// checkbox / textDecoration

function checkCheckbox(){
    let elem = event.currentTarget;
    let elemParent = event.currentTarget.parentElement;
    let elemIndex = event.currentTarget.dataset.index;

    if(elem.checked == true){
        cameArray[elemIndex].checkbox = true;
        cameArray[elemIndex].textDecoration = "line-through";
        elemParent.style.textDecoration = "line-through";
    }else if(elem.checked == false){
        cameArray[elemIndex].checkbox = false;
        cameArray[elemIndex].textDecoration = "none";
        elemParent.style.textDecoration = "none";
    }
    // console.log(cameArray)
    localStorage.setItem(localStorageKey, JSON.stringify(cameArray));
}



// checkbox /textDecoration в сторедж
// зробити плейсхолдер 0
// простилізувати select/option