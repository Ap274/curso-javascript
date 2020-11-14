const bhaskara = (ax2, bx, c) => {
  console.log('Exercício 07');
  console.log('------------');
  const delta = bx ** 2 - 4 * ax2 * c;
  if (delta > 0) {
    const x1 = (-bx + delta ** (1 / 2)) / (2 * ax2);
    const x2 = (-bx - delta ** (1 / 2)) / (2 * ax2);
    const x = [x1, x2];
    console.log(`As raízes são: ${x}`);
  } else if (delta === 0) {
    const x1 = (-bx + delta ** (1 / 2)) / (2 * ax2);
    const x2 = (-bx - delta ** (1 / 2)) / (2 * ax2);
    const x = [x1, x2];
    console.log(`As raízes são: ${x}`);
  }
  if (delta < 0) {
    console.log('Delta é negativo.');
  }
  console.log('------------');
};

module.exports = { bhaskara };
