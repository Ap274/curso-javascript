const RH = (plan, salary) => ({
  msg: 'Plano Correto',
  calculateSalary() {
    switch (plan) {
      case 'A':
        return salary * 1.1;
      case 'B':
        return salary * 1.15;
      case 'C':
        return salary * 1.2;
      default:
        this.msg = 'Plano Inválido';
        return 0;
    }
  },
});

module.exports = { RH };

// function RH(plan, salary) {
//   return {
//     calculateSalary() {
//       return 1100;
//     },
//   };
// }
