function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function() {
  return "Animal sound";
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype.makeSound = function() {
  return "Bark bark!";
};