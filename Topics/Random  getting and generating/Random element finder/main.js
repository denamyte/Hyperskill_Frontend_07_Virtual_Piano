function getRomanNumber(array) {
    const shift = 1;
    const range = array.length - shift;
    const index = shift + Math.floor(Math.random() * range);
    return array[index];
}