const person = {
  name: 'Jane Smith',
  age: 25,
};

const student = Object.create(person, {
  major: { value: 'Computer Science' },
  getDetails: {
    value: function() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Major: ${this.major}`);
    }
  }
});

student.getDetails();