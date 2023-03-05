var items = document.getElementsByClassName("list-group-item");
console.log(items);
// items[0].textContent = "Hello";
items[0].style.fontWeight = "bold";
// items[0].style.backgroundColor = "red";
items[2].style.backgroundColor = "green";
for (var i = 0; i < items.length; i++) {
  items[i].style.fontWeight = "bold";
}
