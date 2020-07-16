const hero = 'Wolverine'
const concatenacao = 'Olá ' + hero + "!"

const template = `
    Olá 
    ${hero}
    !
`

console.log(template)
console.log(`1 + 1 = ${1 + 1}`)

//Função up{} que recebe um texto como parametros e 
//retorna o texto em letras maiúsculas
const up = texto => texto.toUpperCase()

console.log(`Ei ${hero}... ${up('cuidado')}`)
