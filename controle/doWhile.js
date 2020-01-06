function getInteiroAleatoriaEntre(min, max) {
    const aleatorio = Math.random() * (max - min) + min;
    return Math.floor(aleatorio);
}

opcao = 0

do {
    opcao = getInteiroAleatoriaEntre(-1, 10);
    console.log(`Valor aleatório gerado ${opcao}`);
}while(opcao != -1);

console.log('Fim do Programa');