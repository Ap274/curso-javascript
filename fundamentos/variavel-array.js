//Criação de forma literal
const notas = [7.7, 8.9, 6.5, 9.8]

//Acessando valores por índices
console.log(notas[0], notas[3])

//Acessando índices que não existem
console.log(notas[4])

//Criar conteúdo no índice 4
notas[4] = 8.5
console.log(notas)

//Criar índices em qualquer posição
notas[10] = 7.0
console.log(notas)

//Verificar a quantidade de itens
console.log('qtd.itens=', notas.length)

//Arrays são heterogêneos
notas.push({})
notas.push({codigo: 0, nome: 'Beltrano'})
console.log(notas)

//Capturar o último elemento e remover do array
let objeto = notas.pop()
console.log('objeto =', objeto)
console.log(notas)

//Remover o último elemento
delete notas[11]
console.log(notas)

//Arrays em JavaScript são do tipo 'object' (objeto)
console.log(typeof notas)


