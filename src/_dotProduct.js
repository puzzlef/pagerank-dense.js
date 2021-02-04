// Finds sum of element-by-element product of 2 vectors (arrays).
function dotProduct(x, y) {
  var a = 0;
  for (var i=0, I=x.length; i<I; i++)
    a += x[i] * y[i];
  return a;
}
module.exports = dotProduct;
