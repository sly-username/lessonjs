'use strict';

var http = require( 'http' ),
  results,
  toTest = [ 'abba', 'ab bba', 'racecar', '0101', 'a man a plan a canal panama' ],
  panama = require( './src/panama.js' ),
  cli = require( './src/cli.js' );

if ( require.main === module && process.argv[2] !== undefined ) {
  return cli;
} else {
  return toTest.map( panama );
}

var server = http.createServer( function( req, res ) {
  res.writeHead( 200 );
  res.end( 'Hello Http' );
});


server.listen(8080);
