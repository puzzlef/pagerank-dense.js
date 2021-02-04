const dotProduct = require('./_dotProduct');


// Finds rank of nodes in graph.
function pageRank(x, o) {
  var {order, weights} = x;
  var {damping, convergence} = o;
  var ranks = new Array(order).fill(0).map(() => 1/order);
  do {
    var r = ranks.slice(), e = 0;
    for (var j=0; j<order; j++) {
      r[j] = damping*dotProduct(weights[j], ranks) + (1-damping)/order;
      e += Math.abs(ranks[j] - r[j]);
    }
    ranks = r;
  } while (e > convergence);
  return ranks;
}
module.exports = pageRank;
