// var popMenu = document.createElement("div");
// popMenu.id = "popMenu";

// // Create the menu items
// var item1 = document.createElement("div");
// item1.innerHTML = "Item 1";

// var item2 = document.createElement("div");
// item2.innerHTML = "Item 2";

// // Add the items to the menu
// popMenu.appendChild(item1);
// popMenu.appendChild(item2);

// // Add the menu to the page
// document.body.appendChild(popMenu);

/*addButton.onclick = function()
{
    console.log("hkkkkk");
    newCell.textContent = 'This is a new cell';
    newRow.appendChild(newCell);
    newRow.appendChild(newCell);
    newRow.appendChild(newCell);
    newRow.appendChild(newCell);
    table.appendChild(newRow);
}*/


const table = document.querySelector('#table');
const addButton = document.querySelector('#add'); 
const li1 = document.querySelector('#li1'); 
const li2 = document.querySelector('#li2'); 
const li3 = document.querySelector('#li3'); 
const li4 = document.querySelector('#li4'); 
const localStorage = window.localStorage;

addButton.addEventListener('click', () => {
    const newRow = table.insertRow(-1);

    const cell1 = newRow.insertCell(0);
    const idInput = document.createElement('input');
    idInput.type = 'text';
    idInput.name = 'id';
    idInput.style.padding = '15px';
    idInput.style.fontWeight = 'bold';
    idInput.style.textAlign = 'center';
    idInput.style.backgroundColor = '#EEE';
    idInput.style.border = '1px solid #CCC';
    idInput.style.borderRadius = '8%';
    cell1.appendChild(idInput);
    
    const cell2 = newRow.insertCell(1);
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.style.padding = '15px';
    nameInput.style.fontWeight = 'bold';
    nameInput.style.textAlign = 'center';
    nameInput.style.backgroundColor = '#EEE';
    nameInput.style.border = '1px solid #CCC';
    nameInput.style.borderRadius = '8%';
    cell2.appendChild(nameInput);

    const cell3 = newRow.insertCell(2);
    const phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.name = 'phone';
    phoneInput.style.padding = '15px';
    phoneInput.style.fontWeight = 'bold';
    phoneInput.style.textAlign = 'center';
    phoneInput.style.backgroundColor = '#EEE';
    phoneInput.style.border = '1px solid #CCC';
    phoneInput.style.borderRadius = '8%';
    cell3.appendChild(phoneInput);

    const cell4 = newRow.insertCell(3);
    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.name = 'address';
    addressInput.style.padding = '15px';
    addressInput.style.fontWeight = 'bold';
    addressInput.style.textAlign = 'center';
    addressInput.style.backgroundColor = '#EEE';
    addressInput.style.border = '1px solid #CCC';
    addressInput.style.borderRadius = '8%';
    cell4.appendChild(addressInput);

    const eventListener = () => {
        const id = idInput.value;
        const name = nameInput.value;
        const phone = phoneInput.value;
        const address = addressInput.value;

        const newRowData = {
            id,
            name,
            phone,
            address,
        };

        localStorage.setItem('newRowData', JSON.stringify(newRowData));

        table.appendChild(newRowData);
        idInput.value = '';
        nameInput.value = '';
        phoneInput.value = '';
        addressInput.value = '';

        
    };

    idInput.addEventListener('keyup', eventListener);
    nameInput.addEventListener('keyup', eventListener);
    phoneInput.addEventListener('keyup', eventListener);
    addressInput.addEventListener('keyup', eventListener);

    const getNewRowData = () => {
        const newRowData = localStorage.getItem('newRowData');
        if (newRowData !== null) {
            const newRowDataJson = JSON.parse(newRowData);
            const newRow = table.insertRow(-1);
            for (const key in newRowDataJson) {
                const cell = newRow.insertCell(-1);
                const value = newRowDataJson[key];
                cell.textContent = value;
            }
        }
    };
    getNewRowData();

});


let add = document.querySelector(".classes-to-add");
let remove = document.querySelector(".classes-to-remove");
let current = document.querySelector("[title = 'Current']");
let cls = document.querySelector(".classes-list div");

function addOrRemove(){
    // remove all elements at the start
    document.querySelectorAll("span").forEach(el => el.remove());
    
    // add and remove classes
    for (let i = 0; i < this.value.trim().split(" ").length; i++){
        if (add.value)
            current.classList.add(add.value.toLowerCase().trim().split(" ")[i]);
        
        if (remove.value)
        
            current.classList.remove(remove.value.toLowerCase().trim().split(" ")[i]);
    }
    this.value = ""; // علشان بعد ما تكتب ف حقل الاضافة و تعمل بلور يكون مكانة فاضي

    // add and remove spans
    if(current.classList.length){
        [...current.classList].sort().forEach(el => {
            let clSpan = document.createElement("span");
            clSpan.textContent = el;
            cls.append(clSpan);
        });
    }else cls.textContent = "No Classes To Show";
}

add.onblur = addOrRemove;
remove.onblur = addOrRemove;



var popMenu = document.createElement("div");
popMenu.id = "popMenu";

// Create the menu items
var item1 = document.createElement("div");
item1.innerHTML = "Item 1";

var item2 = document.createElement("div");
item2.innerHTML = "Item 2";

// Add the items to the menu
popMenu.appendChild(item1);
popMenu.appendChild(item2);

// Add the menu to the page
document.body.appendChild(popMenu);

