const logger = require('../../logger');

function sum(a, b) {
  logger.info('Exercicio 01');
  logger.info('-------------');
  logger.info(
    `soma = ${a + b}, subt = ${a - b}, multp = ${a * b} e div = ${a / b} `
  );
  logger.info('-------------');
}

// sum(2,5)

module.exports = { sum };
