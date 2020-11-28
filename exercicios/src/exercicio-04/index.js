const invest = (dvd, div) => {
  const result = {
    resultado: Math.floor(dvd / div),
    resto: dvd % div,
  };
  return result;
};

module.exports = { invest };
