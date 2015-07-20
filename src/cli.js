'use strict';

var
  panama = require('./panama' ),
  inputsArray = process.argv.slice( 2 ),
  chalk = require( 'chalk' ),
  colorize = function() {

    console.log( '' );
    console.log( chalk.cyan.bold( a ));

    if ( a === b ) {
      console.log( chalk.green( a + ' is a palindrome (strict)' ));
    } else {
      console.log( chalk.red.strikethrough( a ) + chalk.red( ' is NOT a palindrome (strict)' ));
    }

    if ( a.replace( /\s/g, '' ) === c ) {
      console.log( chalk.green( a + ' is a palindrome (ignore spaces)' ));
    } else {
      console.log( chalk.red.strikethrough( a ) + chalk.red( ' is a NOT palindrome (ignore spaces)' ));
    }
  };

inputsArray.forEach( function( input ) {
  return panama( input );
});

module.exports = function( inputsArray ) {
  var results = inputsArray.map( panama );
  results.forEach( colorize );
  return results;
};
