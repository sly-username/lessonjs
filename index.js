'use strict';

var http = require( 'http' ),
  results,
  toTest = [ 'abba', 'ab bba', 'racecar', '0101', 'a man a plan a canal panama' ],
  panama = require('./src/panama' ),
  cli = require( './src/cli' );

var server = http.createServer( function( req, res ) {
  res.writeHead( 200 );
  res.end( 'Hello Http' );
});

if ( require.main === module ) {
  return cli;
} else {
  return toTest.map( panama );
}



// results = toTest.map( function( input ) {
  // return panama( input );
// });

// JS note, the above map call could be shortened to:
//    results = toTest.map( isPalindrome );

// print process.argv
//process.argv.forEach( function( val, index, array ) {
//  console.log( index + ': ' + val );
//});

console.log( results );

/* Resulting Output:
 [
 {
 input: 'abba',
 strict: true,
 ignoreSpaces: true
 },
 {
 input: 'ab bba',
 strict: false,
 ignoreSpaces: true
 },
 {
 input: 'racecar',
 strict: true,
 ignoreSpaces: true
 },
 {
 input: '0101',
 strict: false,
 ignoreSpaces: false
 },
 ]
 */


server.listen(8080);
console.log("Server running at http://127.0.0.1:8080/");
