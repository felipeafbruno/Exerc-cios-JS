for(let i = 0; i < 10; i++) { 
    console.log('Dentro: ', i);
}
//console.log('Fora: ', i); Vai causar um erro por que a varíavel i esta em escopo de bloco.

const funcs = [];
for(let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    });
}
funcs[2]();
funcs[8]();
