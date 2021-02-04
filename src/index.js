const {Graph, pagerank, normalizeOutDegree} = require('./graph');
const fs = require('fs');


function main(pth) {
  var g = readMtx(pth);
  normalizeOutDegree(g);
  var ranks = pagerank(g, {damping: 0.85, convergence: 1e-6});
  console.log(ranks);
}


function readMtx(pth) {
  var ls = readFile(pth).split('\n');
  var [, order, size] = ls[1].split(' ').map(parseFloat);
  var g = new Graph(order);
  for (var n=2, N=ls.length; n<N; n++) {
    var [i, j, wt] = ls[n].split(' ').map(parseFloat);
    if (wt) g.addLink(i-1, j-1, wt);
  }
  return g;
}


function readFile(pth) {
  var d = fs.readFileSync(pth, 'utf8');
  return d.replace(/\r?\n/g, '\n');
}
module.exports = main;
