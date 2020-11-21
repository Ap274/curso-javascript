const logger = require('../../logger');

const bhaskara = (ax2, bx, c) => {
  logger.info('Exercício 07');
  logger.info('------------');
  const delta = bx ** 2 - 4 * ax2 * c;
  if (delta > 0) {
    const x1 = (-bx + delta ** (1 / 2)) / (2 * ax2);
    const x2 = (-bx - delta ** (1 / 2)) / (2 * ax2);
    const x = [x1, x2];
    logger.info(`As raízes são: ${x}`);
  } else if (delta === 0) {
    const x1 = (-bx + delta ** (1 / 2)) / (2 * ax2);
    const x2 = (-bx - delta ** (1 / 2)) / (2 * ax2);
    const x = [x1, x2];
    logger.info(`As raízes são: ${x}`);
  }
  if (delta < 0) {
    logger.info('Delta é negativo.');
  }
  logger.info('------------');
};

module.exports = { bhaskara };
