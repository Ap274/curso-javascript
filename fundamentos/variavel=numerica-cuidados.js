// Number: alguns cuidados
console.log(7 / 0)
console.log(7/0.0001)
console.log(7/0.00000000001)

console.log("10" / 2) // Funciona - resultado = 5 
console.log("Show!" * 2)

console.log(0.1 + 0.7)

//Cuidado !!!
// console.log(10.toString()) //não funciona
console.log((10.345).toFixed(2))

/*
Resumindo:
- cuidado com tipos String
- cuidado com NaN
- cuidado com imprecisões
*/
