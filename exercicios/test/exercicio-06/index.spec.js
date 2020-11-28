const exercicio06 = require('../../src/exercicio-06');

describe('Exercicio-06', () => {
  it('should  return 120 when simples(100, 10 / 100, 2)', () => {
    expect(exercicio06.simples(100, 10 / 100, 2)).toEqual(120);
  });
  it('should return 121.00000000000001 when compostos(100, 10 / 100, 2)', () => {
    expect(exercicio06.compostos(100, 10 / 100, 2)).toEqual(121.00000000000001);
  });
});
