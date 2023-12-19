function deleteEverySecond(){
    const myArray = ['John', 'Kate', 'Igor', 'Sam', 'Stan', 'William'];
    let index = 1;
    while (index < myArray.length) myArray.splice(index++, 1);
    return myArray;
}
