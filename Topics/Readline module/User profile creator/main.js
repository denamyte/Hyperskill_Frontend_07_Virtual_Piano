const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);
const prn = data => console.log("Your name is %s, you are %s years old, and your favorite programming language is %s.", ...data);
rl.on('line', line => prn(line.split(" ")));
