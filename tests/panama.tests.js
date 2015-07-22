'use strict';

var expect = require( 'chai' ).expect,
  panama = require( '../src/panama.js' );

suite( 'panama.js', function() {

  suite( 'should test whether string is a palindrome', function() {
    test( 'should be a function', function() {
      expect( panama )
        .to.be.a( 'function' );
    });
    test( 'should return an object', function() {
      var palindromeEval = panama( 'ab bba' );

      expect( palindromeEval )
        .to.be.an( 'object' );
    });
  });

  suite( 'strict', function() {
    test( 'should include spaces in evaluation', function() {
      var palindromeEval = panama( 'ab bba' ).strict;

      expect( palindromeEval )
        .to.equal( false );
    });
  });

  suite( 'loose', function() {
    test( 'should disregard spaces in evaluation', function() {
      var palindromeEval = panama( 'a man a plan a canal panama' ).loose;

      expect( palindromeEval )
        .to.equal( true );
    });
  });
});
