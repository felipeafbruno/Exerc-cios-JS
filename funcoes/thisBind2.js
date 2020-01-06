function Pessoa() {
    this.idade = 0;

    const self = this;//nesta linha a const recebe o this que é objeto que defato quer apontar(Pessoa)
    setInterval(function() {
        self.idade++;
        console.log(self.idade);
    }/*.bind(this)*/, 1000);
}

new Pessoa();