module.exports = function reverse (n) {
  const ans = Number(n.toString().split('').reverse().join('').replace('-',''))
  return ans
}
