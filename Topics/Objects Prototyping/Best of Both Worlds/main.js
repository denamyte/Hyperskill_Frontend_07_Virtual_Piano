const world1 = {
    name: "Miley Stewart",
    greet: function() {
        console.log(`Hello, this is ${this.name}!`);
    }
};

const world2 = Object.create(world1, {
    name: {value: "Hannah Montana"}
});
