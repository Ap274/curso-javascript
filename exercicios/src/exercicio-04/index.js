const logger = require('../../logger');

const invest = (dvd, div) => {
  logger.info('Exercício 04');
  logger.info('------------');
  logger.info(`Resultado = ${dvd / div}, onde o resto é = ${dvd % div}`);
  logger.info('------------');
};

module.exports = { invest };
