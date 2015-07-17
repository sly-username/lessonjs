'use strict';

var chalk = require( 'chalk' );

module.exports = function( a ) {
  var b = a.split( '' ).reverse().join ( '' ),
    c = a.replace( /\s/g, '' ).split( '' ).reverse().join ( '' );

  console.log( '' );
  console.log( chalk.cyan.bold( a ));

  if ( a === b ) {
    console.log( chalk.green( a + ' is a palindrome (strict)' ));
  } else {
    console.log( chalk.red( a + ' is NOT a palindrome (strict)' ));
  }

  if ( a.replace( /\s/g, '' ) === c ) {
    console.log( chalk.green( a + ' is a palindrome (ignore spaces)' ));
  } else {
    console.log( chalk.red( a + ' is a NOT palindrome (ignore spaces)' ));
  }
};
