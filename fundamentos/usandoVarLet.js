/*
    Variáveis declaradas com a palavra chave "var" possuem escopo global e de função.
*/
var valor = 10;
{
    var valor = 20;
    console.log('Dentro: ', valor);
}
console.log('Fora: ', valor);

/*
    Variáveis declaradas com a palavra chave "let" possuem o escopo global, de função e de bloco;
    Variáveis declaradas com "let" respeitam uma 'hierarquia'. 
*/
var valor2 = 20;
{
    let valor2 = 30;
    console.log('Dentro:', valor2);
}
console.log('Fora: ', valor2);

let valor3 = 10;
{
    let valor3 = 50;
    console.log('Dentro: ', valor3);
}
console.log('Fora: ', valor3);

