/** @license Apache-2.0 */

'use strict';

/**
* Compute the cumulative sum of strided array elements using ordinary recursive summation.
*
* @module @stdlib/blas-ext-base-gcusumors
*
* @example
* var gcusumors = require( '@stdlib/blas-ext-base-gcusumors' );
*
* var x = [ 1.0, -2.0, 2.0 ];
* var y = [ 0.0, 0.0, 0.0 ];
*
* gcusumors( x.length, 0.0, x, 1, y, 1 );
* // y => [ 1.0, -1.0, 1.0 ]
*
* @example
* var floor = require( '@stdlib/math-base-special-floor' );
* var gcusumors = require( '@stdlib/blas-ext-base-gcusumors' );
*
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
* var N = floor( x.length / 2 );
*
* gcusumors.ndarray( N, 0.0, x, 2, 1, y, 1, 0 );
* // y => [ 1.0, -1.0, 1.0, 5.0, 0.0, 0.0, 0.0, 0.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
