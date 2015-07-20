'use strict';

var
  cli = require( './src/cli.js' ),
  server = require( './server.js' );

if ( require.main === module && process.argv[2] !== undefined ) {
  require( './src/cli' );
} else {
  module.exports = require( './src/panama' );
}
