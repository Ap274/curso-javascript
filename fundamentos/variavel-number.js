// Tipos em JavaScript: Number
const peso1 = 1.0
const peso2 = Number("2.0")
console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //O resultado deve ser true

const avaliacao1 = 9.856
const avaliacao2 = 6.876
const resultado = avaliacao1 * peso1 + avaliacao2 * peso2
const media = resultado / (peso1 + peso2)
console.log(media)
console.log(media.toFixed(2))  // Arredondar duas casas decimais
console.log(media.toString())  // Retorna o valor String
console.log(media.toString(2)) // Retorna o valor binário
console.log(typeof(media))     //Com espaço ou parenteses
console.log(typeof Number)


