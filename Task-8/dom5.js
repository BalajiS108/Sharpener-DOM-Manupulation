var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var textValue = document.getElementById("item");

//form submit event
form.addEventListener("submit", addItem);

//delete item

itemList.addEventListener("click", removeItem);

//Add item

function addItem(e) {
  e.preventDefault();

  //Get input value
  newLiItem = document.createElement("li");
  newLiItem.className = "list-group-item";
  newLiItemText = textValue.value;
  // itemList.appendChild(newLiItemText);
  // console.log(newLiItem);
  newLiItem.textContent = newLiItemText;

  //Add delet button
  var delButton = document.createElement("button");
  delButton.className = "btn btn-danger btn-sm float-right delete";

  //add delete button content
  delButton.textContent = "X";

  // create edit button
  editButton = document.createElement("button");
  editButton.textContent = "Edit";

  //append delet button to li
  newLiItem.appendChild(delButton);

  //append li element to list
  itemList.appendChild(newLiItem);

  //append edit button
  newLiItem.appendChild(editButton);
  editButton.style.marginLeft = "750px";
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

//Add Edit Button
