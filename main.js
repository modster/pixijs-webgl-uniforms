//import './style.css';
import { AsciiFilter } from '@pixi/filter-ascii';
import { Container, Application, Sprite, Texture } from 'pixi.js';

const app = new Application({

  backgroundColor: 0x1099bb,
  resolution: window.devicePixelRatio || 1,
});

document.body.appendChild(app.view);
const container = new Container();
app.stage.addChild(container);

// Create a new texture
const texture = Texture.from('image.png');

// Create a new Sprite using the texture
const bunny = new Sprite(texture);
bunny.anchor.set(0.5);

// Add the bunny to the scene
container.addChild(bunny);
container.filters = [new AsciiFilter()];

// Move container to the center
container.x = app.screen.width / 2;
container.y = app.screen.height / 2;

// Center bunny sprite in local container coordinates
container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;

// Listen for animate update
app.ticker.add((delta) => {
  // use delta to create frame-independent transform
  // container.rotation -= 0.01 * delta;
});
