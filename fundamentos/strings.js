const escola = "Cod3r";
 
console.log(escola.charAt(0));//charAt(): retorna o caractér em uma determinada posição.
console.log(escola.charCodeAt(3))//charCodeAt(): retorna o valor do caractér na Tabela Unicode.
console.log(escola.indexOf('3'));//indexOf(): retorna a posição do valor no informado no argumento.
console.log(escola.substring(1));//substring(): retorna a substring dentro de um range informado como argumento.
console.log('Escola '.concat(escola).concat('!'));//concat(): função para concatenar string, valores, etc.
console.log(escola.replace(3, 'e'));
