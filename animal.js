class Animal {
  constructor(name, sound) {
    this._name = name;
    this._sound = sound;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
  greet() {
    return `Hello I am ${this._name} and I say ${this._sound}`;
  }
}
module.exports = Animal;
