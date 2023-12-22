function Student(name, surname, age) {
  this.getStudent = () => console.log(`Student name: ${name}, student surname: ${surname}, student age: ${age}`)
}

const student = new Student("Alex", "Brown", 28);