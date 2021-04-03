class DiGraph {
  _ve
  _vf
  _S
  _N
  _M

  // Read operations
  span()  { return this._S; }
  order() { return this._N; }
  size()  { return this._M; }
  isEmpty() { return this._N===0; }

  hasVertex() { return this._vf }
}
