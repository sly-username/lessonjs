'use strict';

var panama = require('./src/panama');

exports.module = function() {
  process.argv.forEach( function( val, index, inputsArr ) {
    console.log ( index + ': ' + val );

    return inputsArr.map ( function ( input ) {
      return panama ( input );
    } );
  });
};
