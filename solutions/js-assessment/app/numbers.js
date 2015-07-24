'use strict';
var exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function( num, bit ) {
    return 1 & num >> bit - 1;
  },

  base10: function( str ) {
    return parseInt( str, 2 );
  },

  convertToBinary: function( num ) {
    var str = num.toString( 2 );

    // add back missing '0's
    while ( str.length < 8 ) {
      str = '0' + str;
    }

    return str;
  },

  multiply: function( a, b ) {
    return parseFloat(( a * b ).toPrecision( 1 ));
  }
};
