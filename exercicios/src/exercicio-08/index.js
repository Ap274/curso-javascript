const logger = require('../../logger');

const stringPont = '10, 20, 20, 8, 25, 3, 0, 30, 1';

function avaliaPont(pont) {
  const listaPontos = pont.split(', ');
  let qtdQuebraRecordes = 0;
  let piorJogo = 1;
  // logger.info(listaPontos)
  let maiorPont = listaPontos[0];
  let menorPont = listaPontos[0];

  for (let i = 1; i <= listaPontos.lenght; i++) {
    if (listaPontos[i] > maiorPont) {
      maiorPont = listaPontos[i];
      qtdQuebraRecordes++;
    } else if (listaPontos[i] < menorPont) {
      menorPont = listaPontos[i];
      piorJogo = i + 1;
    }
    logger.info(`maior pontuação = ${maiorPont}`);
    logger.info(`menor pontuação = ${menorPont}`);
  }
  return [qtdQuebraRecordes, piorJogo];
}

const calculaPontuacoes = () => {
  logger.info('Exercício 08');
  logger.info('------------');
  logger.info(avaliaPont(stringPont));
  logger.info('------------');
};

module.exports = { calculaPontuacoes };
/// REVER ESSA QUESTÃO**********
