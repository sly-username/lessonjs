'use strict';

module.exports = function( a ) {
  var b = a.toLowerCase(),
    c = a.replace( /\W/g, '' ).toLowerCase(),
    length = b.length,
    half = Math.floor( length/2 ),
    i = 0;

  for ( ; i < half ; i++ ) {
    console.log( b );
    if ( b[ i ] !== b[ length - 1 - i ]) {
      console.log( a + ' is not a palindrome (strict)' );
      return false;
    } else {
      console.log( a + ' is a palindrome (strict)' );
      return false;
    }


    //else if ( c !== c[ length - 1 - i ]) {
    //  console.log( a + ' is not a palindrome (ignore spaces)' );
    //  return false;
    //} else if ( b[ i ] === b[ length - 1 - i ]) {
    //  console.log( a + ' is a palindrome (strict)' );
    //  return false;
    //} else
    //} else {
    //  console.log( a  + ' is a palindrome' );
    //}
  }

};
