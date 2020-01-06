function checaIdade(idade) {
    return new Promise(function (resolve, reject){ 
        if(idade > 18) {
            setTimeout(() => {
                resolve("Idade maior que 18 anos");
            }, 2000);
        } else {
            setTimeout(() => {
                reject("Idade não é maior que 18 anos"); 
            }, 2000);
        }
    })  
}

checaIdade(44)
    .then(function(response) {
        if(response)
        console.log(response);
    }) 
    .catch(function(response) {
        console.log(response);
    });