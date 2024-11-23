import assert from "assert";
import Player from "../src/Player.js";

describe("Player Class Tests", () => {
  it("should correctly initialize player attributes", () => {
    const player = new Player("Test Player", 100, 10, 20);
    assert.strictEqual(player.name, "Test Player");
    assert.strictEqual(player.health, 100);
    assert.strictEqual(player.strength, 10);
    assert.strictEqual(player.attack, 20);
  });

  it("should correctly identify if the player is alive", () => {
    const player = new Player("Test Player", 0, 10, 20);
    assert.strictEqual(player.isAlive(), false);
  });
});
