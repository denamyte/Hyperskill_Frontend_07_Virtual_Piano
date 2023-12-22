function getCodePoints(str) {
  const pointStr = str.split("")
      .map(c => c.codePointAt(0))
      .join(", ");
  // So sorry, don't have time to figure out that multiple-lines output,
  // so, there is a workaround
  return `[ ${pointStr} ]`;
}

process.stdin.once('data', (input) => {
  console.log(getCodePoints(input.toString().trim()));

  process.stdin.pause();
});