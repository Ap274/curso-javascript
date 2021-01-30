const exercicio14 = require('../../src/exercicio-14');
const { hortifruti } = exercicio14;

describe('exercicio-14', () => {
  it('should return "Não vendemos esta fruta aqui." if fruit is "maçã"', () => {
    expect(hortifruti.venderFruta('maçã')).toBe(
      'Não vendemos esta fruta aqui.'
    );
  });

  it('should return "Erro, fruta inválida." if fruit is "morango"', () => {
    expect(hortifruti.venderFruta('morango')).toBe('Erro, fruta invalida.');
  });

  it('should return "Aqui está, custa R$ 3,00 o quilo" if fruit is "melancia"', () => {
    expect(hortifruti.venderFruta('melancia')).toBe(
      'Aqui está, custa R$ 3,00 o quilo'
    );
  });

  it('should return "Estamos com escassez de kiwis." if fruit is "kiwi"', () => {
    expect(hortifruti.venderFruta('kiwi')).toBe(
      'Estamos com escassez de kiwis.'
    );
  });
});
