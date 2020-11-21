const logger = require('../../logger');

const simples = (capitalI, taxa, tempo) => capitalI + capitalI * taxa * tempo;

const compostos = (capitalI, taxa, tempo) => capitalI * (1 + taxa) ** tempo;

const calcularJuros = () => {
  logger.info('Exercício 06');
  logger.info('------------');
  logger.info(simples(100, 10 / 100, 24));
  logger.info(compostos(100, 10 / 100, 24));
  logger.info('------------');
};

module.exports = { calcularJuros };
