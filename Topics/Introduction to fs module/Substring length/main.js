const fs = require('fs'); //do not change this line

const dataAsync = fs.readFile('main.js', 'utf-8', (err, data) => {
    if (err) {
        return console.log(err);
    }
    console.log(data.indexOf('('));
});