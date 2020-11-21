const logger = require('../../logger');

const vallados = (l1, l2, l3) => {
  if (l1 === l2 && l1 === l3) {
    return 'Triangulo Equilátero';
  }
  if (l1 === l2 || l1 === l3 || l2 === l3) {
    return 'Triangulo Isosceles';
  }
  logger.info('------------');
  return 'Triangulo Escaleno';
};

const calcularTriangulos = () => {
  logger.info('Exercicio 02');
  logger.info('------------');
  logger.info(vallados(2, 4, 5));
  logger.info(vallados(2, 3, 3));
  logger.info(vallados(2, 2, 2));
  logger.info('------------');
};

module.exports = { calcularTriangulos };
