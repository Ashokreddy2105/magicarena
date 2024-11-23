# Magical Arena

Magical Arena is a text-based combat game implemented in Node.js. Two players battle in a turn-based system, where dice rolls determine the effectiveness of attacks and defenses. The game ends when one player's health reaches zero.

---

## Features

- Players have attributes: `health`, `strength`, and `attack`.
- Dice rolls decide attack and defense outcomes.
- Turn-based gameplay with dynamic, colorful logs.
- Simple and modular code for ease of maintenance.

---

## How to Run

### Prerequisites

- **Node.js** (v16.0.0 or above)

### Setup

1. Navigate to the project directory:
   ```bash
   cd magical-arena
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Start the Game

Run the game using:

```bash
node main.js
```

---

## Game Rules

1. **Player Attributes**:

   - `Health`: Life points; game ends when it reaches zero.
   - `Strength`: Defense capability during dice rolls.
   - `Attack`: Determines attack damage during dice rolls.

2. **Turn-Based System**:

   - Player with lower health attacks first.
   - Players alternate turns until one player's health is zero.

3. **Combat Mechanics**:

   - **Attack Damage** = `attacker.attack x dice roll`.
   - **Defense Strength** = `defender.strength x dice roll`.
   - **Damage Dealt** = `Attack Damage - Defense Strength`.

4. **Victory**:
   - The game ends when a player’s health reaches zero.

---

## Example Gameplay

### Initial Stats

```
🔴 Player A: Health=50, Strength=5, Attack=10
🔵 Player B: Health=100, Strength=10, Attack=5
```

### Turn 1

```
⚔️ Player A attacks Player B.
🎲 Rolls 5. Attack Damage = 10 x 5 = 50.
🛡️ Player B rolls 2. Defense Strength = 10 x 2 = 20.
💥 Player B takes 30 damage. Health = 70.
```

### Final Outcome

```
💀 Player A falls! 🏆 Player B wins!
```

---

## File Structure

```plaintext
magical-arena/
├── src/
│   ├── Player.js         # Player class definition
│   ├── Game.js           # Game logic and flow
├── main.js               # Main script to start the game
├── package.json          # Project metadata
├── README.md             # Documentation
```

---

## Testing the Game

The `main.js` file sets up a sample game:

```javascript
import Player from "./src/Player.js";
import Game from "./src/Game.js";

const playerA = new Player("Player A", 50, 5, 10);
const playerB = new Player("Player B", 100, 10, 5);

const game = new Game(playerA, playerB);
game.start();
```

Modify player stats in `main.js` to test different scenarios.

---

## Dependencies

- [chalk](https://www.npmjs.com/package/chalk): For styled console output.
- [figlet](https://www.npmjs.com/package/figlet): For ASCII art.

Install them using:

```bash
npm install
```

---

## Author

Developed by Ashok Reddy.

---

## License

For educational purposes only. Not to be hosted or made public.
