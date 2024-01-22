function newRemove(array, index, n) {
    const newAr = array.slice();
    newAr.splice(index, n);
    return newAr;
}
