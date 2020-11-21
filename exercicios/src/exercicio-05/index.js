const logger = require('../../logger');

const format = (a) => {
  logger.info('Exercício 05');
  logger.info('------------');
  const valor = `R$ ${a.toFixed(2).toString().replace('.', ',')}`;
  logger.info(valor);
  logger.info('------------');
};

module.exports = { format };
