const codeValuesToString = (cv) => String.fromCodePoint(...cv);

process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const inputArray = data.trim().split(/,\s*/).map(Number);

  const outputString = codeValuesToString(inputArray);

  process.stdout.write(outputString);
});