'use strict';

var
  colorize,
  chalk = require( 'chalk' ),
  panama = require('./panama' );

colorize = function( result ) {

  console.log( chalk.cyan.bold( result.input ));

  // if ( result[ flag ] ) {
  //    output = chalk.green( result.input + ' is a palindrome (' + flag ')' );
  // } else {
  //    output = chalk.red.strikethrough( result.input ) + chalk.red(' is NOT a palindrome (' + flag ')' );
  // }


  if ( result.strict ) {
  console.log( chalk.green( result.input + ' is a palindrome (strict)' ));
  } else {
  console.log( chalk.red.strikethrough( result.input ) + chalk.red( ' is NOT a palindrome (strict)' ));
  }

  if ( result.loose ) {
  console.log( chalk.green( result.input + ' is a palindrome (ignore spaces)' ));
  } else {
  console.log( chalk.red.strikethrough( result.input ) + chalk.red( ' is a NOT palindrome (ignore spaces)' ));
  }



};

module.exports = function( inputsArray ) {
  var results = inputsArray.map( panama );
  results.forEach( colorize );
  return results;
};
