const readline = require('readline');

/* Do not change code above */

function hasSurrogatePairs(char) {
  const code = char.charCodeAt(0);
  return code >= 0xD800 && code < 0xDC00;
}

/* Do not change code below */

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  encoding: 'utf16le',
});

let character = '';
rl.input.on('data', (data) => {
  character += data;
});

rl.on('close', () => {
  console.log(hasSurrogatePairs(character));
});

rl.question('', () => {
  rl.close();
});