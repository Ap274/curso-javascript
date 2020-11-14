const format = (a) => {
  console.log('Exercício 05');
  console.log('------------');
  const valor = `R$ ${a.toFixed(2).toString().replace('.', ',')}`;
  console.log(valor);
  console.log('------------');
};

module.exports = { format };
