var inputs = process.argv.slice(2)
var result = inputs.map(x => x.charAt(0)).reduce((previousVal,element) => previousVal + element)
console.log(`[${inputs.toString()}] becomes "${result}"`)
