const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar();
//nesse exemplo o this não aponta para o objeto pessoa
//const falar = pessoa.falar;
//falar();

//bind amarra o this ao objeto ao contexto.
const falar = pessoa.falar.bind(pessoa);
falar();

