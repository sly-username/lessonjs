'use strict';

var panama = require('./panama' ),
  inputsArray = process.argv.slice( 2 );

inputsArray.forEach( function( input ) {
  return panama( input );
});
