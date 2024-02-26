const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);
rl.on('line', input => {
    const type = input % 2 === 1 ? 'Odd' : 'Even';
    console.log(`Enter a number: ${type}`);
});