const outDegree = require('./outDegree');


// Normalizes weights of graph by out-degree.
function normalizeOutDegree(x) {
  var {order, weights} = x;
  for (var i=0; i<order; i++) {
    var d = outDegree(x, i) || order;
    for (var j=0; j<order; j++)
      if (weights[j][i] !== 0 || d === order) weights[j][i] = 1/d;
  }
  return x;
}
module.exports = normalizeOutDegree;
