function ItemAdd() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("ItemList").value;
    let inputValueTxtNode = document.createTextNode(inputValue);

    let btnNode = document.createElement('span');
    btnNode.className = "deleteBtn";
    let btnTxt = document.createTextNode("\u00D7");
    btnNode.appendChild(btnTxt);
    // 
    btnNode.onclick = function () {
        let li = this.parentNode;
        let deleteItem = li.parentNode;
        deleteItem.removeChild(li)
    }
    // 
    let checkBox = document.createElement("INPUT");
    checkBox.setAttribute("type", "checkbox");
    // 
    checkBox.onclick = function () {
        if (checkBox.checked == false) {
            document.getElementById("items").appendChild(li);
        } else {
            document.getElementById("completed-tasks").appendChild(li);
        }
    }

    // 
    li.appendChild(inputValueTxtNode);
    li.appendChild(btnNode);
    li.appendChild(checkBox);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("items").appendChild(li);
    }
    document.getElementById("ItemList").value = "";
}

let input = document.getElementById("ItemList");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("enter").click();
    }
});