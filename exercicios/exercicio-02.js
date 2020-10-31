const vallados = (l1, l2, l3) => {
    if (l1 == l2 && l1 == l3){
        console.log('Triangulo Equilátero')
    }
    else if (l1 == l2 || l1 == l3 || l2 == l3){
        console.log('Triangulo Isosceles')
    }
    else {
        console.log('Triangulo Escaleno')
    }
}

vallados(2,4,5)
vallados(2,3,3)
vallados(2,2,2)