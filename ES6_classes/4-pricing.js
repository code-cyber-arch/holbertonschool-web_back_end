import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = typeof amount === 'number' ? amount : 0;
    this._currency = currency instanceof Currency ? currency : new Currency();

    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }

    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
  }

  get amout() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value === 'number') {
      this._amount = value;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (value instanceof Currency) {
      this._currency = value;
    } else {
      throw new TypeError('Currency must be an instance of Currency');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}
