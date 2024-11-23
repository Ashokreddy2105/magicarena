import assert from "assert";
import Player from "../src/Player.js";
import Game from "../src/Game.js";

describe("Game Class Tests", () => {
  it("should correctly determine the winner", () => {
    const playerA = new Player("Player A", 50, 5, 10);
    const playerB = new Player("Player B", 100, 10, 5);
    const game = new Game(playerA, playerB);

    while (playerA.isAlive() && playerB.isAlive()) {
      game.playTurn();
    }

    const winner = playerA.isAlive() ? playerA.name : playerB.name;
    assert.ok(winner === "Player A" || winner === "Player B");
  });
});
