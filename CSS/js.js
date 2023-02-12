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
