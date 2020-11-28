const bhaskara = (ax2, bx, c) => {
  const resultados = [];
  const delta = bx ** 2 - 4 * ax2 * c;
  if (delta < 0) {
    resultados.push('Delta é negativo');
  } else {
    const x1 = (((-bx + Math.sqrt(delta)) / 2) * 1) / ax2;
    const x2 = (((-bx - Math.sqrt(delta)) / 2) * 1) / ax2;
    resultados.push(x1);
    resultados.push(x2);
  }
  return resultados;
};

module.exports = { bhaskara };
