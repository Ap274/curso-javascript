const player = {
    name: 'Musashi',
    weapon: 'Katana Sword',
    sayNameAndAttack(){
        console.log(this.name);

        global.setTimeout(() => {
            console.log(`${this.name} ataca com ${this.weapon}!!!`)
        }, 5000);
    }
}

player.sayNameAndAttack();