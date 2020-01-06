notas = [7.5, 8.0, 9.4, 6.5, 5.2, 4.0];

let notasBaixas = [];

//sem callback
for(i in notas) {
    if(notas[i] < 7) {
        notasBaixas.push(notas[i]);
    }
}
console.log(notasBaixas);

//com callback - usando função filter para pegar os elementes
let notasBaixas2 = notas.filter(function(nota) {
    return nota < 7;
});
console.log(notasBaixas2);

//com arrow
let notasBaixas3 = notas.filter(nota => nota < 7);
console.log(notasBaixas3);