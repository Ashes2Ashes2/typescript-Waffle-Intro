// 3 lines of magic we can ignore...!
import { Canvas } from './src/Canvas';
import { Color } from './src/Color';
import { Vec2 } from './src/Vec2';

// ----------------------------------------
// ----------------------------------------

const width = 400;
const height = 600;
const backgroundColor = new Color(0.2, 0.8, 1);

const canvas = new Canvas(width, height);
canvas.clear(backgroundColor);

for (let y = 0; y < height; y += 50) {
  for (let x = 0; x < width; x += 100) {
    let horizShift = 50 * ((y / 50) % 2);

    canvas.drawRect(
      new Vec2(x + horizShift, y),
      50,
      50,
      new Color(0.2, 0.75, 1)
    );
  }
}

canvas.drawRect(canvas.midpoint, 100, 200, new Color(1, 0.8, 1));

canvas.drawRect(new Vec2(100, 100), 100, 200, new Color(0.7, 1, 1));

let radius = 75;
canvas.drawCircle(canvas.midpoint, radius, new Color(0.8, 0.4, 1));

radius = 45;
canvas.drawCircle(canvas.midpoint, radius, new Color(0.7, 0.6, 1));

canvas.drawCircle(canvas.midpoint, 20, Color.fromHexString('#7f7fff'));

canvas.drawText(
  'ABC',
  Color.fromHSV(0.25, 0.2, 1),
  new Vec2(width / 2, 50),
  90, // fontSize
  'center'
);
