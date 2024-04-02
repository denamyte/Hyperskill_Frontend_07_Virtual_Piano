const { performance } = require('perf_hooks');

let start = performance.now()
toMeasure().then(() => {
  let end = performance.now()
  console.log(end - start)
});