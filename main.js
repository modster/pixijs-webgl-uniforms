import { AsciiFilter } from '@pixi/filter-ascii';
import { Container, Application, Sprite, Texture } from 'pixi.js';

//Construct a Pixi.JS application
const app = new Application({
  backgroundColor: 0x000000,
  resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.view);

// Create a container to do our buisness in
const container = new Container();
app.stage.addChild(container);

// Create a new texture
const texture = Texture.from('image.png');

// Create a new Sprite using the texture
const sprite1 = new Sprite(texture);
sprite1.anchor.set(0.5);

// Add the Sprite to the scene
container.addChild(sprite1);
container.filters = [new AsciiFilter()];

// Move container to the center
container.x = app.screen.width / 2;
container.y = app.screen.height / 2;

// Center sprite in local container coordinates
container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;

// Listen for animate update
app.ticker.add((delta) => {
  // use delta to create frame-independent transform
  // container.rotation -= 0.01 * delta;
});
