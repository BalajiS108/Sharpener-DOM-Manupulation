//Traversing the DOM
var itemList = document.querySelector("#items");
//-------------------------------------Parent Node-----------------------------------------
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "green";
// console.log(itemList.parentNode.parentNode.parentNode.parentNode);
// console.log(itemList.parentElement);

// ----------------------------------Child Nodes--------------------------------------------

console.log(itemList.children);
itemList.children[1].style.backgroundColor = "yellow";
// ----------------------------First Child---------------------------------------------------
//First Child
// console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "Hello World";

// ----------------------------Last Child---------------------------------------------------

console.log(itemList.lastElementChild);
itemList.lastElementChild.style.backgroundColor = "red";
itemList.lastElementChild.textContent = "Hello 4";

//-----------------------------Next Sibling--------------------------------------------------
// console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

//-----------------------------previous Sibling----------------------------------------------
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "green";

// ---------------------------------creating Elements--------------------------------------------

var newDiv = document.createElement("div");

//Add class
newDiv.className = "hello";

//Add id
newDiv.id = "hello 1";

//Add Attribute
newDiv.setAttribute("title", "hello div");

//create text node
var newDivText = document.createTextNode("HEllo");

//add text to div
newDiv.appendChild(newDivText);

//Adding div element to HTML document or DOM

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");
container.insertBefore(newDiv, h1);
newDiv.style.fontSize = "30px";
console.log(container);
console.log(newDiv);

//------------------------------------------Questions from task----------------------------------------------

//create new li element
var newLiItem = document.createElement("li");

//create its class

newLiItem.className = "New Li class";
//Add id
newLiItem.id = "New Li id";

//create text node to li

var newLiItemText = document.createTextNode("HEllo");

//Add above node to li
newLiItem.appendChild(newLiItemText);

//Add li to HTML document or DOM
var list = document.querySelector(".list-group");
var li1 = document.querySelectorAll(".list-group-item");
list.insertBefore(newLiItem, li1[0]);
console.log(newLiItem);
