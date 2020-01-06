//Função sem retorno.
function imprimirSoma(a, b){
    console.log(a + b);
}

let valor2; 

imprimirSoma(2, 3);
imprimirSoma(2,(valor2 || 0));//O segundo valor não foi passado para a função então o segundo parametro definido como Undefined.
imprimirSoma(2, 10, 4, 5, 6, 7);//Os valores que não são atribuidos a algum parametro da função são ignorados.

//Função com retorno.
function soma(a, b = 1) {//Apartir do EcmaScript 2015 foi inserido o recurso padrão de atribuição. 
    return a + b;
}

console.log(soma(2,3));
console.log(soma(2));
console.log(soma());