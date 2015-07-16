'use strict';

module.exports = function( a ) {
  var b = a.toString().replace( /\W/g, '' ).toLowerCase(),
    c = a.toString().split( /\b/ ).reverse().join( '' );
  console.log( a.toString() );

  if ( a === c ) {
    console.log( a + ' is a palindrome (strict)' );
  }

  if ( b === b.split ( '' ).reverse ().join ( '' ) && a !== c ) {
    console.log ( a + ' is a palindrome (ignore spaces)' );
  }

};
