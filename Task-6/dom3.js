var header = document.querySelector("#main-header");
console.log(header);
header.style.borderBottom = "4px solid red";

var container = document.querySelector(".container");
console.log(container);

var input = document.querySelector("input");
input.value = "Hare Krishna";

var button = document.querySelector('input[type="submit"]');
button.value = "send";

var li = document.querySelector(".list-group-item");
console.log(li);
li.style.color = "red";

var lastItem = document.querySelector(".list-group-item:last-child");
lastItem.style.color = "blue";
lastItem.style.fontWeight = "bold";

//Setting 2nd item color as green using query selector

// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "green";
// secondItem.style.fontWeight = "bold";

var thirdItem = document.querySelector(".list-group-item:nth-child(3)");
console.log(thirdItem);
thirdItem.style.visibility = "hidden"; //hiding third element

//Query Selector All

var titles = document.querySelectorAll(".title");
console.log(titles);

// var titles = document.querySelector(".title");
// console.log(titles);

titles[0].textContent = "Hari bol";

var odd = document.querySelectorAll("li:nth-child(odd)");
var even = document.querySelectorAll("li:nth-child(even)");
for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "green";
  even[i].style.backgroundColor = "#ccc";
}

//Changing colr to green of second item
var secondItem = document.querySelectorAll(".list-group-item");
secondItem[1].style.color = "green";
// secondItem.style.fontWeight = "bold";
