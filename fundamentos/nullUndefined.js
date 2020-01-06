//Undefined = Não inicializado - Diferente de 'is not define' = Não existe/Não foi declarado. 
let valor//Undefined
console.log(valor);

//Obs: optar null para zerar o valor de uma váriavel.
valor = null;//ausência de valor/vazio. Não aponta para nenhum local na memória.
console.log(valor);

const produto = {};
console.log(produto.preco);//undefined - tentiva de acessar a propriedade que não existe dentro do objeto.
console.log(produto);

produto.preco = 3.50;
console.log(produto); 