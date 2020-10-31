const simples = (capitalI, taxa, tempo) => {
    return capitalI + capitalI * taxa * tempo
}

const compostos = (capitalI, taxa, tempo) => {
    return Math.trunc(capitalI * (1+taxa)**tempo)
}

const calcularJuros = () => {
    console.log("Exercício 06")
    console.log("------------")
    console.log(simples(100, 10/100, 24))
    console.log(compostos(100, 10/100, 24))
    console.log("------------")
}

module.exports = {calcularJuros}