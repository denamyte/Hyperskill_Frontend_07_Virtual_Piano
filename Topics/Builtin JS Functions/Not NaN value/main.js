let data = [11, null, NaN, 'Hello', 24];

console.log(data.length - data.filter(isNaN).length);