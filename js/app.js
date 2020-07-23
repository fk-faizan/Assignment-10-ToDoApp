// alert("hello")

var todo_item = document.getElementById("todo-text").focus();

function addToDo() {
    var todo_item = document.getElementById("todo-text");
    var table = document.getElementById("todo-list").getElementsByTagName('tbody')[0];

    // Method 1
    // var row = tableBody.insertRow(1);
    // var cell1 = row.insertCell(0);
    // cell1.innerHTML = todo_item.value;

    if(todo_item.value !== "") {
        var row = document.createElement('tr');
    
        var cell1 = document.createElement('td');
        var cell1Text = document.createTextNode('');
        cell1.appendChild(cell1Text);
    
        var cell2 = document.createElement('td');
        var cell2Text = document.createTextNode(todo_item.value);
        cell2.appendChild(cell2Text);
    
        var cell3 = document.createElement('td');
        var btnDlt = document.createElement('button');
        var btnEdt = document.createElement('button');
        cell3.appendChild(btnDlt);
        cell3.appendChild(btnEdt);
        var btnDltText = document.createTextNode('Delete');
        var btnEdtText = document.createTextNode('Edit');
        btnDlt.appendChild(btnDltText);
        btnEdt.appendChild(btnEdtText);
    
        btnDlt.setAttribute('class', 'btn btn-sm btn-danger');
        btnDlt.setAttribute('onclick', 'deleteTodo(this)');
        btnEdt.setAttribute('class', 'btn btn-sm btn-warning ml-2');
        btnEdt.setAttribute('onclick', 'editTodo(this)');
    
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
    
        table.appendChild(row);

        todo_item.value = '';
    } else {
        alert("Insert Some Text in Input Field");
        todo_item.focus();
    }
}

function deleteTodo(e) {
    e.parentNode.parentNode.remove();
}

function editTodo(e) {
    var todoText = e.parentNode.previousSibling;

    e.parentNode.childNodes[1].disabled = true;
   
    // todoText.innerHTML = '';

    var input = document.createElement('input');
    // input.value = todoText.innerHTML;
    // todoText.innerHTML = '';
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'form-control');
    input.setAttribute('placeholder', todoText.innerHTML);
    todoText.appendChild(input);

    input.focus();

    todoText.setAttribute('class', 'text-center');
    

    var btnUpdate = document.createElement('button');
    var btnUpdateText = document.createTextNode('Update')
    btnUpdate.appendChild(btnUpdateText);
    btnUpdate.setAttribute('class', 'btn btn-sm btn-danger mt-2')
    btnUpdate.setAttribute('onclick', 'update(this)');
    todoText.appendChild(btnUpdate);
}

function update(e) {
    var prevTodo = e.parentNode.childNodes[0];
    var updateTodo = e.parentNode.childNodes[1].value;

    if(updateTodo !== '') {
        prevTodo.nodeValue = updateTodo;
        e.parentNode.removeAttribute('class');
        
        e.parentNode.nextSibling.childNodes[1].disabled = false;
        
        e.parentNode.childNodes[1].remove();
        e.remove();
    } else {
        e.parentNode.childNodes[1].focus();
        alert("Must Input Something !")
    }
}

function clearAll() {
    var table = document.getElementById("todo-list").getElementsByTagName('tbody')[0];
    table.innerHTML = '';
    // table.remove();
    // table.childNodes;
    // table.removeChild(table.childNodes[0])
    console.log(table.innerHTML)
}
