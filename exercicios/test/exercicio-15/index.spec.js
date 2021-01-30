const { revenda } = require('../../src/exercicio-15');

describe('exercicio-15', () => {
  it('should return "Compra efetuada com sucesso" if choice is "hatch"', () => {
    expect(revenda.comprarVeiculo('hatch')).toBe('Compra efetuada com sucesso');
  });
  it('should return "Não trabalhamos com este tipo de automóvel aqui" if choice is "SUV"', () => {
    expect(revenda.comprarVeiculo('SUV')).toBe(
      'Não trabalhamos com este tipo de automóvel aqui'
    );
  });
  it('should return "Não trabalhamos com este tipo de automóvel aqui" if choice is "perua"', () => {
    expect(revenda.comprarVeiculo('perua')).toBe(
      'Não trabalhamos com este tipo de automóvel aqui'
    );
  });
  it('should return "Tem certeza que não prefere este modelo?" if choice is not "hatch"', () => {
    expect(revenda.comprarVeiculo('sedan')).toBe(
      'Tem certeza que não prefere este modelo?'
    );
    expect(revenda.comprarVeiculo('motorcycle')).toBe(
      'Tem certeza que não prefere este modelo?'
    );
    expect(revenda.comprarVeiculo('truck')).toBe(
      'Tem certeza que não prefere este modelo?'
    );
  });
});
