let listElement = document.querySelector("#app ul");
let btnBuscar = document.querySelector("#app button");
let btnAdicionar = document.getElementsByTagName("button")[1];
let inputElement = document.querySelector("#app input");
let dadosUsuario = document.querySelector("#dadosUsuario");

let dadosTodo = [];

function buscarUsuario() {
    let username = inputElement.value;

    axios.get(`https://api.github.com/users/${username}`)
        .then(function(response){
            let dados = document.createTextNode(JSON.stringify(response));
            dadosUsuario.appendChild(dados);
        })
        .catch(function(response) {
            alert(response);
        })

}

function renderTodoList(username) {
    return new Promise(function(resolve,reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.github.com/users/${username}`);
        xhr.send(null);
        
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    setTimeout(() => {
                        resolve(createTodoList());    
                    }, 2000);
                } else {
                    setTimeout(() => {
                        listElement.innerHTML = ''; 
                        reject("Usuário não existe");
                    }, 2000);
                }
            }
        }
    });
}

function createTodoList() {
    listElement.innerHTML = ''; 
    
    alert(dadosTodo);
    for(todo of dadosTodo) {
    
        let todoElement = document.createElement('li');
        let todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
        console.log(listElement);
    }
}

btnBuscar.onclick = buscarUsuario;
btnAdicionar.onclick = adicionarTodo;

function adicionarTodo() {
    let username = inputElement.value;
    
    renderTodoList(username)
        .then(function(response){
            console.log(response);
        }).catch(function(response){
            alert(response);
        });
    
    dadosTodo.push(username);
    inputElement.value = '';
}


/*
function requestAPIGitHub(username) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', `https://api.github.com/users/${username}`);
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject("Erro na requisição");
                }
            }
        }
    });
}
*/