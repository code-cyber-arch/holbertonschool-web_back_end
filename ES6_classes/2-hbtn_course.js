export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = typeof name === 'string' ? name : '';
    this._length = typeof length === 'number' ? length : 0;
    this._students = Array.isArray(students) ? students : [];
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Getter and setter for length
  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // Getter and setter for students
  get students() {
    return this._students;
  }

  set students(values) {
    if (Array.isArray(values) && values.every((s) => typeof s === 'string')) {
      this._students = values;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
