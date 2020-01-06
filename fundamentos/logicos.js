function compras(trabalho1, trabalho2) {
    const comprarSorverte = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    const comprarTv32 = trabalho1 != trabalho2;//representação de XOR.
    const manterSaudavel = !comprarSorverte;

    return { comprarSorverte, comprarTv50, comprarTv32, manterSaudavel };
}

console.log(compras(true, true));