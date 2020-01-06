//novo recurso do ES2015
const pessoa = {
    nome: 'Felipe',
    idade: 25,
    endereco: {
        logradouro: 'Rua Maria Inacia',
        numero: 44 
    }
};

//chaves representam o operador destructuring.
//operador vai extrair de uma estrutura as propriedades entre chaves.
const {nome, idade} = pessoa;
console.log(nome, idade);

//possível dar nomes diferentes as variaveis extraídas.
const {nome: n, idade: i} = pessoa;
console.log(n, i);

const { sobreNome, bemHumorada = true} = pessoa;
console.log(sobreNome, bemHumorada);

const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep);