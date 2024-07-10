export default class Currency {
  constructor(code, name) {
    this._code = typeof code === 'string' ? code : '';
    this._name = typeof name === 'string' ? name : '';

    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }

    if (typeof name !== 'string') {
      throw new TypeError('Name must be a number');
    }
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value === 'string') {
      this._code = value;
    }
    throw new TypeError('Code must be a string');
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    }
    throw new TypeError('Name must be a string');
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
