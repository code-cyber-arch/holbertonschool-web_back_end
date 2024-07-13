export default class Car {
  constructor(brand, motor, color) {
    this._brand = typeof brand === 'string' ? brand : '';
    this._motor = typeof motor === 'string' ? motor : '';
    this._color = typeof color === 'string' ? color : '';
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    if (typeof value === 'string') {
      this._brand = value;
    } else {
      throw new TypeError('Brand must be string');
    }
  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    if (typeof value === 'string') {
      this._motor = value;
    } else {
      throw new TypeError('Motor must be string');
    }
  }

  get color() {
    return this._color;
  }

  set color(value) {
    if (typeof value === 'string') {
      this._color = value;
    } else {
      throw new TypeError('Color must be string');
    }
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
