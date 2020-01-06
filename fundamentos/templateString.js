const nome = "Felipe";
const concatenacao = "Olá " + nome +"!";
const idade = 25;

/*
    Template String são literia string que permitem expressões embutidas, 
    permite também usar strings multi-linhas e interpolação.
*/
const template = 
`
    Olá
    ${nome}!
    Idade 
    ${idade}
`;

console.log(concatenacao, template);

//expressões
console.log(`1 + 1 = ${1 + 1}`);

//função arrow
const up = texto => texto.toUpperCase();

console.log(`Ei... ${up("cuidado")}!`);//É possível fazer chamadas de funções dentro do Template String.