const vallados = (l1, l2, l3) => {
  if (l1 === l2 && l1 === l3) {
    return 'Triangulo Equilátero';
  }
  if (l1 === l2 || l1 === l3 || l2 === l3) {
    return 'Triangulo Isosceles';
  }
  console.log('------------');
  return 'Triangulo Escaleno';
};

const calcularTriangulos = () => {
  console.log('Exercicio 02');
  console.log('------------');
  console.log(vallados(2, 4, 5));
  console.log(vallados(2, 3, 3));
  console.log(vallados(2, 2, 2));
  console.log('------------');
};

module.exports = { calcularTriangulos };
