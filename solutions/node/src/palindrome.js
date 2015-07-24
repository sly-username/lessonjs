'use strict';
/**
 * Palindrome Module
 * @module src/palindrome
 */

var
  oneLiner,
  stripSpacesOneLiner;

oneLiner = function( word ) {
  return word.split( '' ).reverse().join( '' ) === word;
};

stripSpacesOneLiner = function( word ) {
  return oneLiner( word.replace( /\s/g, '' ));
};

/**
 * @param {string} word -- the string to check
 * @returns {{input: string, oneLiner: boolean, off: boolean}} -- map of results and input
 *
 * @description
 *  checks to see if the string is a palindrome and returns a map of results
 */
module.exports = function( word ) {
  return {
    input: word,
    oneLiner: oneLiner( word ),
    stripSpacesOneLiner: stripSpacesOneLiner( word )
  };
};
