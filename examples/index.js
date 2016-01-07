'use strict'

var tdiag = require('../')

var d = [4, 25, -5]

tdiag([0, -1, 2], [2, 7, -3], [1, 4, 0], d)

console.log(d)
// => d = [ 1, 2, 3 ]
