function area(largura, altura){
    const area = largura * altura
    if (area > 20){
        console.log(`Valor acima do permitido: ${area} m2.`)
    } else {
        return area
    }
}

//4 
console.log(area(2,2))

//NaN
console.log(area(2))

//NaN
console.log(area())

//6
console.log(area(2, 3, 10, 15))