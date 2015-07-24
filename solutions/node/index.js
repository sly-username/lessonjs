#!/usr/bin/env node

'use strict';
var args = global.process.argv.slice( 2 );

//args.forEach( function( arg, i ) { console.log( i + ': ' + arg ); });

if ( require.main === module ) {
  // run directly via command line, delegate to cli module
  require( './src/cli' )( args );
} else {
  // imported via 'require', re-export pragmatic api
  module.exports = require( './src/palindrome' );
}
