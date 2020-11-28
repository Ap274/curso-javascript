const format = (a) => {
  const valor = `R$ ${a.toFixed(2).toString().replace('.', ',')}`;
  return valor;
};

module.exports = { format };
