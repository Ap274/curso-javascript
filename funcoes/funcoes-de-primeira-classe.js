//criação de forma literal
function funcao1() {}

//armazenar funcao (anônima) em variavel ou constante

const funcao2 = function() {}

//armazenas funções em arrays
const list = [function(a,b) {return a+b}, funcao1, funcao2]

console.log( list[0](5,5) )

//armazenar funções em objetos (versao 1)
const object1 = {}
object1.message = function() { return 'Hello World' }
console.log(object1.message())

//armazenar funções em objetos (versao 2)
const object2 = {
    message: function() { return 'Hello World2' }
}
console.log(object2.message())

//passar função como parâmetro para outra função
function execute(props){
    console.log('execute() ==>')
    props()
}

execute(function() { console.log('Executando...') } )

//uma funcao pode retornar/conter uma outra função
function sum(a,b) {
    return function(c) {
        console.log(a + b + c)
    }
}

//executando de forma literal
sum(2,3)(5)

//armazenar em uma variavel e depois executar
const mySum = sum(2, 3)
mySum(10)
 
