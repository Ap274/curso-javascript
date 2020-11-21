const logger = require('../../logger');

const sum = (a, b) => {
  logger.info('Exercicio 01');
  logger.info('-------------');
  const result = {
    soma: a + b,
    subtracao: a - b,
    multiplicacao: a * b,
    divisao: a / b,
  };

  logger.info(
    `soma=${result.soma}, subt=${result.subtracao}, multp= ${result.multiplicacao} e div= ${result.divisao}`
  );
  logger.info('-------------');

  return result;
};

// sum(2,5)

module.exports = { sum };
