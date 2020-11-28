const exercicio04 = require('../../src/exercicio-04');

describe('Exercicio-04', () => {
  it('should return {resultado: 2, resto: 3}', () => {
    expect(exercicio04.invest(11, 4)).toEqual({ resultado: 2, resto: 3 });
  });
});
