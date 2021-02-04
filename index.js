const {normalizeOutDegree, pageRank} = require('./src');
const readMtx = require('./src/_readMtx');

const A = process.argv;


function main(pth) {
  var g = readMtx(pth);
  normalizeOutDegree(g);
  var ranks = pageRank(g, {damping: 0.85, convergence: 1e-6});
  console.log(ranks);
}
main(A[2]);
