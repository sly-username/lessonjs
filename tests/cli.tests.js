'use strict';

var expect = require( 'chai' ).expect,
  cli = require( '../src/cli.js' ),
  toTest = [ 'a man a plan a canal panama', 'dad', 'im a lasagna hang a salami' ];

suite( 'cli.js', function() {

  suite( 'should colorize results', function() {
    test( 'should be a function', function() {
      expect( cli )
        .to.be.a( 'function' );
    });
    test( 'should return an array of colorized results', function() {
      expect( cli( toTest ))
        .to.be.an( 'array' );
    });
  });

  suite( 'strict', function() {
    test( 'if true, key\'s value is true', function() {
      var strictTest = cli([ 'dad' ] );

      expect ( strictTest[ 0 ])
        .to.have.property( 'strict' )
        .that.deep.equals( true );

    });

    test( 'if false, key\'s value is false', function() {
      var strictTest = cli([ 'ab bba' ]);

      expect ( strictTest[ 0 ])
        .to.have.property( 'strict' )
        .that.deep.equals( false );
    });
  });

  suite( 'loose', function() {
    test( 'if true, key\'s value is true', function() {
      var looseTest = cli([ 'ab bba' ]);

      expect ( looseTest[ 0 ])
        .to.have.property( 'loose' )
        .that.deep.equals( true );
    });

    test( 'if false, key\'s value is false', function() {
      var looseTest = cli([ 'sdlfksdjlfk' ]);

      expect ( looseTest[ 0 ])
        .to.have.property( 'loose' )
        .that.deep.equals( false );
    });
  });
});
