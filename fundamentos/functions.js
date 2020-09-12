//Object é uma função
console.log(typeof Object)

//Classe é uma função
class Produto{}
console.log(typeof Produto)

//função sem retorno:
function exibirSoma(a, b) {
    console.log(a + b)
}

//exibir 30 no console
exibirSoma(10, 20)

//exibir um NaN
exibirSoma(10)

//retorna 30
exibirSoma(10, 20, 30, 40, 50)

//retorna NaN
exibirSoma()

console.log('---------------------')
//////////////////////
// Função com Retorno
function soma(a=0, b=0){
    return a + b 
}

//retorna 30 no console
console.log(soma(10,20))
console.log(soma(10))
console.log(soma())

console.log('----------------')
//////////////////////////
// armazenar uma função em uma variável ou constante:
const imprimirSoma = function(a,b){
    console.log(a + b)
}

imprimirSoma(2, 3)

//armazenar uma função 'arrow' em uma variável
const somar = (a, b) => {
    return a + b
}
console.log(somar(6,3))

//funções 'arrow' tem o retorno implícito quando existe apenas uma linha de código
const subtracao = (a, b) => a - b
console.log(subtracao(13,4))

const imprimir = texto => console.log(texto)
imprimir('Muito legal!')