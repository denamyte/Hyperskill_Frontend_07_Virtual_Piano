let dataFirst = ['124f', '8'];
let dataSecond = ['431M_p', '9'];

console.log(
    [dataFirst, dataSecond]
        .map(data => parseInt(...data))
        .reduce((a, b) => a + b)
);