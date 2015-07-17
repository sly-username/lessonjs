'use strict';

var toTest = [ 'abba', 'ab bba', 'racecar', '0101', 'a man a plan a canal panama' ],
  panama = require( './src/panama.js' ),
  cli = require( './src/cli.js' ),
  server = require( './server.js' );

if ( require.main === module && process.argv[2] !== undefined ) {
  return cli;
} else {
  return toTest.map( panama );
}
