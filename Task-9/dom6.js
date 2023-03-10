var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var textValue = document.getElementById("item");
var textDescValue = document.getElementById("description");
var filter = document.getElementById("filter");

//form submit event
form.addEventListener("submit", addItem);

//delete item

itemList.addEventListener("click", removeItem);

//filter event

filter.addEventListener("keyup", filterItems);

//Add item

function addItem(e) {
  e.preventDefault();

  //Get input value
  newLiItem = document.createElement("li");
  newLiDesc = document.createElement("li");

  //adding class name
  newLiItem.className = "list-group-item";
  newLiDesc.className = "list-group-item";
  newLiItemText = textValue.value;
  newLiDescText = textDescValue.value;

  // itemList.appendChild(newLiItemText);
  // console.log(newLiItem);
  newLiItem.textContent = newLiItemText + " " + newLiDescText;

  console.log(newLiItem.textContent);
  debugger;
  //Add delet button
  var delButton = document.createElement("button");
  delButton.className = "btn btn-danger btn-sm float-right delete";

  //add delete button content
  delButton.textContent = "X";

  // create edit button
  editButton = document.createElement("button");
  editButton.className = "btn btn-danger btn-sm float-right edit";
  editButton.textContent = "Edit";

  //append delet button to li
  newLiItem.appendChild(delButton);

  //append li element to list
  itemList.appendChild(newLiItem);

  //append edit button
  newLiItem.appendChild(editButton);
  //   editButton.style.marginLeft = "750px";
}
//Remove Item function
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//Filtering

function filterItems(e) {
  e.preventDefault();
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName("li");
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
