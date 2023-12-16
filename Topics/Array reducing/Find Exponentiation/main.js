function calculateExp(numbers){
    console.log(numbers.reduceRight((acc, curr) => Math.pow(curr, acc)))
}
