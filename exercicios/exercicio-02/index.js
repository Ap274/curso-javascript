const vallados = (l1, l2, l3) => {
    if (l1 == l2 && l1 == l3){
        return "Triangulo Equilátero"
    }
    else if (l1 == l2 || l1 == l3 || l2 == l3){
        return "Triangulo Isosceles"
    }
    else {
        return "Triangulo Escaleno"
    }
    console.log("------------");
}

const calcularTriangulos = () => {
    console.log("Exercicio 02")
    console.log("------------")
    console.log(vallados(2,4,5))
    console.log(vallados(2,3,3))
    console.log(vallados(2,2,2))
    console.log("------------")
}

module.exports = {calcularTriangulos}