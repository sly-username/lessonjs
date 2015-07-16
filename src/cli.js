'use strict';

var panama = require('./panama' ),
  inputsArray = process.argv.slice( 2 );

inputsArray.forEach( function( input ) {
  return panama( input );
});

//module.exports = function() {
  //process.argv.forEach( function( val, index, inputsArr ) {
  //  console.log ( index + ': ' + val );
  //
  //  return inputsArr.map ( function ( input ) {
  //    return panama ( input, true );
  //  } );
  //});
//};
