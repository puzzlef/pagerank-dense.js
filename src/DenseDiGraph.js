class DenseDiGraph {
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
module.exports = DenseDiGraph;
