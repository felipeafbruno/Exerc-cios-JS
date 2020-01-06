/*
    Arrays no JavaScript não tem dimensão fixa e são heterogênios(recebem valores de tipos diferentes).
*/
const valores = [7.9, 8.3, 4.5];

console.log(valores[0], valores[3]);

/*
    Expressão devolverá o resultado undefined, 
    em javascript essa situação não acarreta um erro como em outras linguagens.
    Obs: Provavelmente por que a estrutura de Array é redimensionavel.
*/
console.log(valores[4]);

valores[3] = 10;
/*
    Inserir valores em índices fora da sequência força com que os outras posições
    sejam atribudas como vazio. 
*/
console.log(valores);
console.log(valores.length);//atributo mostra a quantidade de elementos dentro do array.

valores.push({id: 3}, false, null, 'teste');
console.log(valores);

console.log(valores.pop());//pop(): função retira o último elemento do array.
delete valores[3];//operador delete remove um elemento de em objeto.
console.log(valores); 

console.log(typeof valores );
