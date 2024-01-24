function loopArray(arr) {
    for (let item of arr) {
        if (item === 3) {
            break
        }
        console.log(item);
    }
}