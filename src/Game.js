class Game {
  constructor(playerA, playerB) {
    this.playerA = playerA;
    this.playerB = playerB;
    this.turn = playerA.health <= playerB.health ? playerA : playerB;
  }
}

export default Game;
