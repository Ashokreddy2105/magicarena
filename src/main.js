import Player from "./Player.js";
import Game from "./Game.js";

// Initialize players with attributes: name, health, strength, attack
const playerA = new Player("Player A", 50, 5, 10);
const playerB = new Player("Player B", 100, 10, 5);

// Create a new game with the players
const game = new Game(playerA, playerB);

// Start the game
game.start();
