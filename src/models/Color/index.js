var cm = require('color-model');

class Color {

  constructor(r, g, b) {
    this.data = {
      r: r,
      g: g,
      b: b,
      hue: new cm.Rgb(r, g, b).toHsl().hue()
    };
  }

  get() {
    return this.data;
  }

}

module.exports = Color;
