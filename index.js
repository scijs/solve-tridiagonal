'use strict'

module.exports = solveTridiagonal

function solveTridiagonal (n, a, b, c, x) {
  var i, fac

  // Eliminate:
  for (i = 1; i < n; i++) {
    if (b[i - 1] === 0) {
      console.log('tridiagonalSolve: failed due to lack of diagonal dominance')
      return false
    }
    fac = a[i] / b[i - 1]
    b[i] -= fac * c[i - 1]
    x[i] -= fac * x[i - 1]
  }

  // Back-substitute:
  if (b[n - 1] === 0) {
    console.log('tridiagonalSolve: failed due to singular matrix')
    return false
  }
  x[n - 1] /= b[n - 1]
  for (i = n - 2; i >= 0; i--) {
    if (b[i] === 0) {
      console.log('tridiagonalSolve: failed due to singular matrix')
      return false
    }
    x[i] = (x[i] - c[i] * x[i + 1]) / b[i]
  }

  return true
}
