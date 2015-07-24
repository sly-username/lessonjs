'use strict';
var exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function( str ) {
    return ( /\d+/ ).test( str );
  },

  containsRepeatingLetter: function( str ) {
    return ( /([a-zA-Z])(?=\1)/gi ).test( str );
  },

  endsWithVowel: function( str ) {
    return ( /[aeiou]$/gi ).test( str );
  },

  captureThreeNumbers: function( str ) {
    // madness below
    return (( /(\d{3})/g ).exec( str ) || [])[ 0 ] || false;
  },

  matchesPattern: function( str ) {
    return ( /^(\d{3}-){2}\d{4}$/gi ).test( str );
  },

  isUSD: function( str ) {
    return ( /^\$(\d{1,3}(,\d{3})+)?(\d{0,3})(\.\d{2})?$/ ).test( str );
  }
};
