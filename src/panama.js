'use strict';

module.exports = function( a ) {
  var b = a.replace( /\W/g, '' ).toLowerCase(),
    length = b.length,
    i = 0;
  for ( ; i < Math.floor( length/2 ); i++ ) {
    if ( b[ i ] !== b[ length - 1 - i ]) {
      alert( a + ' is not a palindrome' );
      return false;
    }
  }
  alert(  + ' is a palindrome' );
};
