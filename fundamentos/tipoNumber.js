const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1))//isInteger: função para verificar se o valor atribuido é Inteiro

const avaliacao1 = 9.871;
const avaliacao2 = 6.781;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));//toFixed: função para fixar as casas decimais.
console.log(media.toString());//toString: função que retorna String como resultado, pode receber argumentos para Conversão Numérica.
console.log(typeof media) ;
console.log(typeof Number);