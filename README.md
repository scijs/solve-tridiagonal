# solve-tridiagonal [![Build Status](https://travis-ci.org/scijs/solve-tridiagonal.svg)](https://travis-ci.org/scijs/solve-tridiagonal) [![npm version](https://badge.fury.io/js/solve-tridiagonal.svg)](https://badge.fury.io/js/solve-tridiagonal) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

> Solve a system of linear tridiagonal equations

## Introduction

This module accepts javascript Arrays or typed arrays representing the bands of a tridiagonal matrix and computes the solution using the [Thomas algorithm](http://www.cfd-online.com/Wiki/Tridiagonal_matrix_algorithm_-_TDMA_(Thomas_algorithm)). The problem in matrix form is

<p align="center"><img alt="&bsol;left&lsqb;&NewLine;&bsol;begin&lcub;matrix&rcub;&NewLine;   &lcub;b&lowbar;0&rcub; &amp; &lcub;c&lowbar;0&rcub; &amp; &lcub;   &rcub; &amp; &lcub;   &rcub; &amp; &lcub; 0 &rcub; &bsol;&bsol;&NewLine;   &lcub;a&lowbar;1&rcub; &amp; &lcub;b&lowbar;1&rcub; &amp; &lcub;c&lowbar;1&rcub; &amp; &lcub;   &rcub; &amp; &lcub;   &rcub; &bsol;&bsol;&NewLine;   &lcub;   &rcub; &amp; &lcub;a&lowbar;2&rcub; &amp; &lcub;b&lowbar;2&rcub; &amp; &bsol;cdot &amp; &lcub;   &rcub; &bsol;&bsol;&NewLine;   &lcub;   &rcub; &amp; &lcub;   &rcub; &amp; &bsol;cdot &amp; &bsol;cdot &amp; &lcub;c&lowbar;&lcub;n-2&rcub;&rcub;&bsol;&bsol;&NewLine;   &lcub; 0 &rcub; &amp; &lcub;   &rcub; &amp; &lcub;   &rcub; &amp; &lcub;a&lowbar;&lcub;n-1&rcub;&rcub; &amp; &lcub;b&lowbar;&lcub;n-1&rcub;&rcub;&bsol;&bsol;&NewLine;&bsol;end&lcub;matrix&rcub;&NewLine;&bsol;right&rsqb;&NewLine;&bsol;left&lsqb;&NewLine;&bsol;begin&lcub;matrix&rcub;&NewLine;   &lcub;x&lowbar;0 &rcub;  &bsol;&bsol;&NewLine;   &lcub;x&lowbar;1 &rcub;  &bsol;&bsol;&NewLine;   &bsol;cdot   &bsol;&bsol;&NewLine;   &bsol;cdot   &bsol;&bsol;&NewLine;   &lcub;x&lowbar;&lcub;n-1&rcub; &rcub;  &bsol;&bsol;&NewLine;&bsol;end&lcub;matrix&rcub;&NewLine;&bsol;right&rsqb;&NewLine;&equals;&NewLine;&bsol;left&lsqb;&NewLine;&bsol;begin&lcub;matrix&rcub;&NewLine;   &lcub;d&lowbar;0 &rcub;  &bsol;&bsol;&NewLine;   &lcub;d&lowbar;1 &rcub;  &bsol;&bsol;&NewLine;   &bsol;cdot   &bsol;&bsol;&NewLine;   &bsol;cdot   &bsol;&bsol;&NewLine;   &lcub;d&lowbar;&lcub;n-1&rcub; &rcub;  &bsol;&bsol;&NewLine;&bsol;end&lcub;matrix&rcub;&NewLine;&bsol;right&rsqb;&period;" valign="middle" src="images/left-beginmatrix-b_0-c_0-0-a_1-b_1-c_1-a_2-b_-c99d75b4c8.png" width="425" height="126"></p>

The solver will fail if the matrix is singular and may not succeed if the matrix is not diagonally dominant. If the solver fails, it will log a console message and return false.

## Example

Consider the solution of

<p align="center"><img alt="&bsol;left&lsqb;&NewLine;&bsol;begin&lcub;matrix&rcub;&NewLine;   2 &amp; 1 &amp;  0 &bsol;&bsol;&NewLine;  -1 &amp; 7 &amp;  4 &bsol;&bsol;&NewLine;   0 &amp; 2 &amp; -3 &bsol;&bsol;&NewLine;&bsol;end&lcub;matrix&rcub;&NewLine;&bsol;right&rsqb;&NewLine;&bsol;left&lsqb;&NewLine;&bsol;begin&lcub;matrix&rcub;&NewLine;   &lcub;x&lowbar;0 &rcub;  &bsol;&bsol;&NewLine;   &lcub;x&lowbar;1 &rcub;  &bsol;&bsol;&NewLine;   &lcub;x&lowbar;2 &rcub;  &bsol;&bsol;&NewLine;&bsol;end&lcub;matrix&rcub;&NewLine;&bsol;right&rsqb;&NewLine;&equals;&NewLine;&bsol;left&lsqb;&NewLine;&bsol;begin&lcub;matrix&rcub;&NewLine;   &lcub;4&rcub;  &bsol;&bsol;&NewLine;   &lcub;25&rcub;  &bsol;&bsol;&NewLine;   &lcub;-5&rcub;  &bsol;&bsol;&NewLine;&bsol;end&lcub;matrix&rcub;&NewLine;&bsol;right&rsqb;&period;" valign="middle" src="images/left-beginmatrix-2-1-0-1-7-4-0-2-3-endmatrix--f1451b965d.png" width="269" height="78"></p>

```javascript
var tdiag = require('solve-tridiagonal')

var d = [4, 25, -5]

tdiag([0, -1, 2], [2, 7, -3], [1, 4, 0], d)
// => d = [ 1, 2, 3 ]
```

## Installation

```javascript
$ npm install solve-tridiagonal
```

## API

#### `require('solve-tridiagonal')(n, a, b, c, d)`
**Arguments**:
- `n`: an integer representing the number of equations to be solved
- `a`: a javascript `Array` or typed array of length n representing the subdiagonal, indexed according to the equation above. Left unchanged by the solver.
- `b`: a javascript `Array` or typed array of length n representing the diagonal, indexed as above. This vector is modified by the solver.
- `c`: a javascript `Array` or typed array of length n representing the superdiagonal, indexed as above. This vector is modified by the solver.
- `d`: a javascript `Array` or typed array of length n representing the known vector d. On successful completion, this vector will contain the solution.

**Returns**: True on successful completion, false otherwise.

## License
&copy; 2016 Ricky Reusser. MIT License.