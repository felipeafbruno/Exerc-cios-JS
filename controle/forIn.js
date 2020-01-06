const pessoa = {
    nome : 'Felipe',
    idade : 25,
    faculdade  : true,
    trabalho : 'AI MEU DEUS'
}

for (let p in pessoa) {
    console.log(`${p} => ${pessoa[p]}`);
} 
