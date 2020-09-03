let isAtivo = false
console.log('isAtivo = ', isAtivo)

isAtivo = true
console.log('isAtivo = ', isAtivo)

//Agora começa o interessante
isAtivo = 1
//Exibe o valor numerico de 'isAtivo'
console.log('isAtivo = ', isAtivo)
//Exibe o valor booleano de 'isAtivo'
console.log('isAtivo = ', !!isAtivo)

console.log('... Valores Verdadeiros ...')

//Numeros inteiros positivos e negativos, menos o zero!
console.log(!!3)
console.log(!!-1)

//Strings com no mínimo um espaço em branco
console.log(!!' ')
console.log(!!'texto')

//Listas (vazias ou com valor)
console.log(!![])
console.log(!!['arroz', 'feijão', 'café'])

//Objetos (vazios ou com conteúdo)
console.log(!!{})
console.log(!!{nome: 'Fulano', sobrenome: 'da Silva'})

//Tipos Infinity (infinito)
console.log(!!Infinity)

//Valores 'verdadeiros' atribuídos a variáveis.
//Não confundir com o resultado da operação, mas sim se o valor atribuído é verdadeiro
console.log(!!(isAtivo = true))

console.log('... Valores Falsos ...')

//Zero
console.log(!!0)

//Strings vazias
console.log(!!'')

//Valores nulos
console.log(!!null)

//Valores não numéricos
console.log(!!NaN)

//Valores undefined (indefinidos)
console.log(!!undefined)

//Valores falsos atribuídos a variáveis
console.log(!!(isAtivo = false))

/************************************/

console.log('... Expressões Booleanas ...')

console.log('... Operador OU ...')
//se um dos valores for 'verdadeiro', o resultado é verdadeiro
console.log(!!('' || null || 0 || ' '))

//a expressão OU retorna sempre o 'primeiro valor' verdadeiro
//e da 'esquerda' para a 'direita'
//vamos tirar a dupla negação para conferir
console.log(('' || null || 0 || '' || 123))

//Operador OR na prática:
let nome = ''
console.log(nome || 'Nome Desconhecido')

console.log('... Operador AND ...')
//Operador AND
//Se todos os valores forem 'verdadeiros', o resultado é verdadeirox
console.log(!!('Teste' && [] && {} && Infinity))

//A expressão AND sempre retorna o último valor verdadeiro.
console.log(('Teste' && [] && {} && -1 && Infinity))

//Operador AND na prática:
let link = '#inicio'
link && console.log('Expressão a executar')  //comanda se for verdadeiro, mais enxuto que fazer um if







