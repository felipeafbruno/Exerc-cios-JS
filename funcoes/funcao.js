//Em JS funções são denominadas de First-Class Object/High-Order
/*
    Funções são tratadas como dados e podem ser devolvidas como valor de retorno, passadas como argumento,
    atribuidas a uma variavel e estar aninha dentro de outra função, atribuidas a um atributo de um objeto. 
*/

//Função de forma literal.
function func1() {console.log('Func1')}

//Atribuição a uma constante, variavel, etc.
const func2 = function() {console.log('Func2')}//function(){} -> função anônima.

//Atribuição a um array.
const array = [function(a, b){
    return a + b    
}, func1, func2];
console.log(array[0](1 , 2));
array[1]();
array[2]();

//Passar uma função como parametro.
function run(fun) {
    fun();
}

run(function () {console.log('Oi!!!')});

//Uma função pode retornar outra função/conter outra função.
function soma(a, b) {
    return function(c) {
        console.log(a + b + c);
    }
}

soma(1, 2)(3);