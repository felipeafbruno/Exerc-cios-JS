//com bind 
function criarPessoa(nome) {
    return {
        nome,
        falar: function () {
            console.log(`Meu nome é ${nome}`);
        }.bind(this)
    }
}

const pessoa = criarPessoa('Felipe');

pessoa.falar();

//sem bind
function Pessoa(nome) {
    this.nome = nome,
    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`);
    }
}

