class Graph {
  constructor(n) {
    this.order = n;
    this.degrees = new Array(n).fill(0);
    this.weights = new Array(n).fill(null).map(() => new Array(n).fill(0));
  }

  addLink(i, j, wt=1) {
    var w0 = this.weights[j][i];
    this.degrees[i] += wt !== 0? 1 : 0;
    this.degrees[i] -= w0 !== 0? 1 : 0;
    this.weights[j][i] = wt;
  }
}


// Finds rank of nodes in graph.
function pagerank(x, o) {
  var {order, weights} = x;
  var {damping, convergence} = o;
  var ranks = new Array(order).fill(0).map(() => 1/order);
  do {
    var r = ranks.slice(), e = 0;
    for (var j=0; j<order; j++) {
      r[j] = damping*dotproduct(weights[j], ranks) + (1-damping)/order;
      e += Math.abs(ranks[j] - r[j]);
    }
    ranks = r;
  } while (e > convergence);
  return ranks;
}


// Normalizes weights of graph by out-degree.
function normalizeOutDegree(x) {
  var {order, weights} = x;
  for (var i=0; i<order; i++) {
    var d = degrees(x, i) || order;
    for (var j=0; j<order; j++)
      if (weights[j][i] !== 0 || d === order) weights[j][i] = 1/d;
  }
  return x;
}


function degrees(x, i) {
  var {order, weights} = x, a = 0;
  for (var j=0; j<order; j++)
    if (weights[j][i] !== 0) a++;
  return a;
}


// Finds sum of element-by-element product of 2 vectors (arrays).
function dotproduct(x, y) {
  var a = 0;
  for (var i=0, I=x.length; i<I; i++)
    a += x[i] * y[i];
  return a;
}
module.exports = {Graph, pagerank, normalizeOutDegree};
