const { Numbers } = require('../../src/exercicio-18');

const obj = Numbers();
describe('exercicio-18', () => {
  it('should return num description when "num" is between 0 and 10', () => {
    expect.assertions(11);
    expect(obj.getDescription(0)).toBe('Zero');
    expect(obj.getDescription(1)).toBe('One');
    expect(obj.getDescription(2)).toBe('Two');
    expect(obj.getDescription(3)).toBe('Three');
    expect(obj.getDescription(4)).toBe('Four');
    expect(obj.getDescription(5)).toBe('Five');
    expect(obj.getDescription(6)).toBe('Six');
    expect(obj.getDescription(7)).toBe('Seven');
    expect(obj.getDescription(8)).toBe('Eight');
    expect(obj.getDescription(9)).toBe('Nine');
    expect(obj.getDescription(10)).toBe('Ten');
  });
  it('should return "Numero fora do intervalo" when "num" is out of gap', () => {
    expect(obj.getDescription(13)).toBe('Number out of gap');
  });
});
