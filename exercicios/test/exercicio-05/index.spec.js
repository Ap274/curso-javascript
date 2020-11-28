const exercicio04 = require('../../src/exercicio-04');
const exercicio05 = require('../../src/exercicio-05');

describe('Exercicio-05', () => {
  it('should return "R$ 0,30" if param = (0.1+0.2)', () => {
    expect(exercicio05.format(0.1 + 0.2)).toEqual('R$ 0,30');
  });
  it('should return "R$ 0,50" if param = (0.50000000)', () => {
    expect(exercicio05.format(0.5)).toEqual('R$ 0,50');
  });
});
