module.exports = (...args) => {
  var sum = args.reduce((total, value) => total + value, 0)
  return sum/args.length
}
