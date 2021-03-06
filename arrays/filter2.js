Array.prototype.filter2 = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPad Pro', preco: 4199, fragil: true },
  { nome: 'Copo de vidro', preco: 12.5, fragil: true },
  { nome: 'Copo de Plástico', preco: 10.5, fragil: false },
];

let filtroFalse = produtos.filter2((e) => {
  return false;
});

let filtroTrue = produtos.filter2((e) => {
  return true;
});

// console.log(filtroFalse);
// console.log(filtroTrue);

//Produtos caros e frágeis
const caro = (produto) => produto.preco >= 500;
const fragil = (produto) => produto.fragil;
const naoFragil = (produto) => !produto.fragil;

let produtosFiltrados = produtos.filter2(caro).filter2(fragil);
let produtosFrageis = produtos.filter2(fragil);
let produtosNaoFrageis = produtos.filter2(naoFragil);

console.log(produtosFiltrados);
console.log(produtosFrageis);
console.log(produtosNaoFrageis);
