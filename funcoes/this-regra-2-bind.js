/**
 * Regra 2: Usando 'bind', 'apply' e 'call' o valor de 'this' dentro da funçao é explicitamente setado no primeiro argumento (de bind, apply ou call)
 */

const player = {
    name: 'Hermes',
};

const enemy = {
    name: 'Prometheus',
};

const sayName = function() {
    console.log(this.name);
};

const sayPlayerName = sayName.bind(player);
const sayEnemyName = sayName.bind(enemy);

sayPlayerName() //Hermes
sayEnemyName() //Prometeus
