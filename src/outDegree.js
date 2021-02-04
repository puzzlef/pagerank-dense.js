// Finds out-degree of a node.
function outDegree(x, i) {
  var {order, weights} = x, a = 0;
  for (var j=0; j<order; j++)
    if (weights[j][i] !== 0) a++;
  return a;
}
module.exports = outDegree;
