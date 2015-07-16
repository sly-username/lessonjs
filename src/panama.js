'use strict';

module.exports = function( a ) {
  var b = a.replace( /\W/g, '' ).toLowerCase(),
    length = b.length,
    i = 0;
  for ( ; i < Math.floor( length/2 ); i++ ) {
    if ( b[ i ] !== b[ length - 1 - i ]) {
      console.log( a + ' is not a palindrome' );
      return false;
    }
  }
  console.log( a  + ' is a palindrome' );
};
