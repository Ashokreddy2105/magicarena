// Class representing a player in the Magical Arena
class Player {
  /**
   * Create a Player.
   * @param {string} name - Name of the player.
   * @param {number} health - Initial health points of the player.
   * @param {number} strength - Strength multiplier for defense.
   * @param {number} attack - Attack multiplier for offense.
   */
  constructor(name, health, strength, attack) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.attack = attack;
  }

  /**
   * Check if the player is still alive.
   * @returns {boolean} - True if health > 0, false otherwise.
   */
  isAlive() {
    return this.health > 0;
  }
}

export default Player;
