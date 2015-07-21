'use strict';

var
  strict = function( a ) {
    var b = a.split( '' ).reverse().join ( '' );
      return a === b;
    },
  loose = function( a ) {
    var
      c = a.replace( /\s/g, '' ),
      d = c.split( '' ).reverse().join ( '' );
    return c === d;
  };

module.exports = function( a ) {
  // returns the input
  // and boolean values for the strict and/or loose palindrome evaluation
  return {
    input: a,
    strict: strict( a ),
    loose: loose( a )
  };
};
