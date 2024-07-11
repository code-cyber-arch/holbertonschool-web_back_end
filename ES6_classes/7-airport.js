export default class Airport {
  constructor(name, code) {
    this._name = typeof name === 'string' ? name : '';
    this._code = typeof code === 'string' ? name : '';
  }

  toSrting() {
    return this._code;
  }
}
