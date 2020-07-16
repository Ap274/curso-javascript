//Tipos em JavaScript: String
const escola = 'ProgrammerHero'
console.log(escola.charAt(4)) //Retorna a 4 letra a partir do 0 
console.log(escola.charAt(20))
console.log(escola.charCodeAt(4)) //Valor na tabela UNICODE

console.log(escola.indexOf('H')) //Posição da letra
console.log(escola.substring(10)) //A partir do 10, mostra o resto
console.log(escola.substring(0,10)) 

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
console.log(`EScola ${escola}!`)

console.log(escola.replace('m', 'M'))
console.log(escola.replace('mm', 'MM'))

console.log(escola.replace(/\P/, '*')) //Substitui a 1ª letra por *
console.log(escola.replace(/\w/g, '*')) //Substitui tudo por asteríscos

console.log('Marlo, Aldo, Stefany'.split(','))
console.log("3" + 2) //Resultado é 32, String ganha do '+'



