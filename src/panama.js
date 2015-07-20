'use strict';

var strict, loose;

strict = function( a ) {
  var b = a.split( '' ).reverse().join ( '' );
  return a === b;
};

loose = function( a ){
  var c = a.replace( /\s/g, '' ).split( '' ).reverse().join ( '' );
  return a.replace( /\s/g, '' ) === c;
};

module.exports = function( a ) {
  return {
    input: a,
    strict: strict( a ),
    loose: loose( a )
  };

};
