const salary = 25000;

function getSalary(expenses) {
    console.log(expenses.reduce((acc, curr) => acc - curr, salary))
}
