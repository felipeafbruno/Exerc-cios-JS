function criarProduto(descProd, precoProd, fabricProd) {
    const desconto = 0.1
    return {
        nome: descProd,
        preco: precoProd,
        fabricante: fabricProd,
        desconto
    }
}

const prod1 = criarProduto('Leite', 2.50, 'Batavo');

for (p in prod1) {
    console.log(prod1[p]);
}