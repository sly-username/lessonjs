'use strict';

var
  cli = require( './src/cli.js' ),
  server = require( './server.js' ),
  inputsArray = process.argv.slice( 2 );

if ( require.main === module && process.argv[2] !== undefined ) {
  require( './src/cli' )( inputsArray );
} else {
  module.exports = require( './src/panama' );
}
