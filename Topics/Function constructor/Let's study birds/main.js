function Bird(name, color, size) {
  this.name = name;
  this.color = color;
  this.size = size;
}

const [amazonParrot, canary] =
    [
        ["Amazon parrot", "green", "medium"],
        ["Canary", "orange, red, yellow", "small"]
    ].map(params => new Bird(...params));