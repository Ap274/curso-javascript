const logger = require('../../logger');

const elev = (a, b) => {
  logger.info('Exercicio 03');
  logger.info('------------');
  logger.info(a ** b);
  logger.info('------------');
};

module.exports = { elev };
