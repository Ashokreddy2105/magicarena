class Game {
  constructor(playerA, playerB) {
    this.playerA = playerA;
    this.playerB = playerB;
    this.turn = playerA.health <= playerB.health ? playerA : playerB;
  }

  rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  computeDamage(attacker, defender) {
    const attackRoll = this.rollDice();
    const defenseRoll = this.rollDice();

    const attackDamage = attacker.attack * attackRoll;
    const defenseStrength = defender.strength * defenseRoll;

    const damageDealt = Math.max(0, attackDamage - defenseStrength);
    defender.health -= damageDealt;

    console.log(
      chalk.red.bold(
        `🎲 ${attacker.name} rolls a ${attackRoll}! Attack power: ${attacker.attack} x ${attackRoll} = ${attackDamage}`
      )
    );
    console.log(
      chalk.blue.bold(
        `🛡️ ${defender.name} rolls a ${defenseRoll}! Defense power: ${defender.strength} x ${defenseRoll} = ${defenseStrength}`
      )
    );
    if (damageDealt > 0) {
      console.log(
        chalk.green.bold(
          `💥 ${defender.name} takes ${damageDealt} damage! Remaining health: ${defender.health}`
        )
      );
    } else {
      console.log(
        chalk.cyan.bold(
          `🛡️ ${defender.name} completely defends the attack! No damage taken.`
        )
      );
    }

    console.log(
      chalk.gray("------------------------------------------------------------")
    );
    return damageDealt;
  }
}

export default Game;
