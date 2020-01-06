let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let btnElement = document.querySelector("#app button");

//Obtendo a lista de TODO armazenada na localStorage.
let todos = JSON.parse(localStorage.getItem('list_todo')) || [];

function loadRender() {
    listElement.innerHTML = '';
    let todoElement = document.createElement('li');
    let todoText = document.createTextNode("Carregando...");
    todoElement.appendChild(todoText);
    listElement.appendChild(todoElement);

    return new Promise(function(resolve){
        setTimeout(() => {
            resolve(todoList());
        }, 5000);
    });
}
function todoList() {
    //Limpando a lista para carregar os itens.
    listElement.innerHTML = '';
    
    //Obtendo a lista de TODO armazenada na localStorage.
    todos = JSON.parse(localStorage.getItem('list_todo'));

    for (todo of todos) {
        let todoElement = document.createElement('li');
        let todoText = document.createTextNode(todo);

        let linkElement = document.createElement('a');
        let linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);
        linkElement.setAttribute('href', '#');
    
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }    
}

loadRender();

function addTodo() {
    let inputText = inputElement.value;
    todos.push(inputText);     
    inputElement.value = '';
    saveToStorage();
    loadRender().then(response);
}

btnElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    saveToStorage();
    loadRender().then(response);
}

//salvando os dados da lita em storage local.
function saveToStorage() {
    //localStorage é uma variável global que permite guardar itens.
    //via método setItem() - o método setItem recebe apenas String como valor não permitindo estruturas
    //mais complexas como objetos - 
    //Então para guardar uma estrutura mais complexa utilizar o formato JSON.
    localStorage.setItem('list_todo', JSON.stringify(todos));
}