# js_project

![JavaScript](https://img.shields.io/badge/language-JavaScript-yellow)
![HTML](https://img.shields.io/badge/markup-HTML5-orange)
![License](https://img.shields.io/badge/license-MIT-green)

A collection of beginner JavaScript mini-projects: a Node.js CLI quiz-game starter and a browser-based colour flipper app.

## Features

- **Quiz_game** — minimal Node.js CLI starter that prompts for the player's name via `prompt-sync`.
- **color_flipper** — static browser app with Green / Red / Blue preset buttons plus a Random button that paints the page a random `rgb()` colour.

## Tech Stack

- Vanilla JavaScript (no frameworks)
- HTML + inline CSS (`color_flipper/main.html`)
- Node.js + [`prompt-sync`](https://www.npmjs.com/package/prompt-sync) (`Quiz_game`)

## Structure

```text
js_project/
├── Quiz_game/
│   ├── game.js           # CLI entry point (asks for player name)
│   ├── package.json      # declares prompt-sync dependency
│   └── package-lock.json
└── color_flipper/
    ├── main.html         # page with colour buttons
    ├── index.js          # button handlers + random RGB generator
    └── mylink.txt        # scratch/notes file
```

## Installation

Only `Quiz_game` has a dependency:

```bash
cd Quiz_game
npm install
```

`color_flipper` is dependency-free static HTML/JS — no install step.

## Usage

**Quiz game (terminal):**

```bash
cd Quiz_game
node game.js
```

**Colour flipper (browser):**

Open `color_flipper/main.html` directly in any browser (double-click the file, or serve it):

```bash
# option 1: just open the file in a browser
# option 2: serve locally
npx serve color_flipper
```

Click **Green**, **Red**, or **Blue** to apply a preset background, or **Random** for a random `rgb(r, g, b)` background.

## Examples

`color_flipper/index.js` in full:

```js
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const color = button.id === "random" ? getRandomColor() : colors[button.id];
    if (color) {
      body.style.backgroundColor = color;
    }
  });
});
```

`Quiz_game/game.js` in full:

```js
const prompt = require("prompt-sync")();
prompt("enter your name: ");
```

## Configuration

- `Quiz_game/package.json` pins `prompt-sync@^4.2.0`. No other configuration exists.

## Contributing

1. Fork the repo, create a feature branch.
2. Keep each mini-project self-contained in its own folder.
3. Open a pull request describing what the demo does.

## License

MIT — see `LICENSE` if added. No license file is currently present; MIT applies by default for reuse of these sample projects.
