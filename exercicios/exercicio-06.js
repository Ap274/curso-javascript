const simples = (capitalI, taxa, tempo) => {
    return capitalI + capitalI * taxa * tempo
}

const compostos = (capitalI, taxa, tempo) => {
    return Math.trunc(capitalI * (1+taxa)**tempo)
}

console.log(simples(100, 10/100, 24))
console.log(compostos(100, 10/100, 24))