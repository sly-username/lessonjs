'use strict';

var
  niceName,
  logResult,
  chalk = require( 'chalk' ),
  palindrome = require( './palindrome' );

/**
 * @function niceName
 * @param {string} testName -- the string key as returned in the results object
 * @returns {string} -- the nice name
 *
 * @description
 *  turns the test property name into a nice name for cli output
 */
niceName = function( testName ) {
  switch ( testName ) {
    case 'oneLiner':
      return 'one liner';
    default:
      return testName;
  }
};

/**
 *
 * @param {PalindromeResult} result -- a single result object
 * @returns undefined;
 *
 * @description
 *  displays a result object to the console with chalk
 */
logResult = function( result ) {
  var keys = Object.keys( result ).filter( function( key ) { return key !== 'input'; });

  keys.forEach( function( key ) {
    var
      passed = result[ key ],
      color = passed ? 'green' : 'red',
      message = result.input;

    // build main message
    message += ' is ' + ( passed ? 'a' : 'not a' ) + ' palindrome';

    // append "translated" test name
    message += ' (' + niceName( key ) + ')';

    // colorize and log
    message = chalk[ color ]( message );
    console.log( message );
  });

  // end with a clean line
  console.log( '' );
};

// process args
module.exports = function( strings ) {
  var results = strings.map( palindrome );
  results.forEach( logResult );
  return results;
};
