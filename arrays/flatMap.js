//FlatMap
const escola = [
  {
    nome: 'Turma H1',
    alunos: [
      {
        nome: 'Aldo',
        nota: 9.1,
      },
      {
        nome: 'Stefany',
        nota: 9.3,
      },
    ],
  },
  {
    nome: 'Turma H2',
    alunos: [
      {
        nome: 'Djalma',
        nota: 8.4,
      },
      {
        nome: 'Geraldo',
        nota: 8.9,
      },
    ],
  },
];

const getNotaAluno = (aluno) => {
  console.log(aluno);
  return aluno.nota;
};
const getNotasdaTurma = (turma) => {
  return turma.alunos.map(getNotaAluno);
};
const notas1 = escola.map(getNotasdaTurma);
console.log([].concat(notas1));
console.log([].concat([9.1, 9.3], [8.4, 8.9]));

Array.prototype.flatMap = function (callback) {
  return Array.prototype.concat.apply([], this.map(callback));
};

const notas2 = escola.flatMap(getNotasdaTurma);
console.log(notas2);
