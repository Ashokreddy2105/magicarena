class Game {
  constructor(playerA, playerB) {
    this.playerA = playerA;
    this.playerB = playerB;
    this.turn = playerA.health <= playerB.health ? playerA : playerB;
  }

  rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
}

export default Game;
