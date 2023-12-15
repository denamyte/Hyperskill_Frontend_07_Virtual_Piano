function search(numbers) {
    return numbers.find(el => el % 11 === 0);
}