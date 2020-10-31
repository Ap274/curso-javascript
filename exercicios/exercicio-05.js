const format = (a) => {
    let valor = `R$ ${a.toFixed(2).toString().replace(".",",")}`
    console.log(valor)
}

format(0.1+0.2)