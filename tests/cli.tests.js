'use strict';

require( 'mocha-sinon' );

var sinon = require('sinon' ),
  expect = require( 'chai' ).expect,
  chalk = require( 'chalk' ),
  //ansi = require('has-ansi'),
  cli = require( '../src/cli.js' ),
  toTest = [ 'a man a plan a canal panama', 'dad', 'im a lasagna hang a salami' ];

suite( 'cli.js', function() {

  suite( 'main functions:', function() {
    test.skip( 'should be a function', function() {
      expect( cli )
        .to.be.a( 'function' );
    });

    test.skip( 'should return an array of colorized results', function() {
      expect( cli( toTest ))
        .to.be.an( 'array' );
    });

    test.skip( 'should log results from both tests to the console', function() {
      // and the console.log to print out the input

      var log = console.log;

      this.sinon.stub(console, 'log', function() {
        return log.apply(log, arguments);
      });

      cli([ 'dad' ] );

      expect( console.log.calledThrice ).to.equal( true );
    });
  });

  suite( 'strict', function() {
    test.skip( 'if a strict palindrome, key\'s value is true', function() {
      var strictTest = cli([ 'dad' ]);

      expect ( strictTest[ 0 ])
        .to.have.property( 'strict' )
        .that.deep.equals( true );
    });

    test( 'if a strict palindrome, console message should be green', function() {
      //var logSpy = sinon.spy( console, 'log' );
      var d = ;
      //
      //expect( chalk.hasColor( '\u001b[32' ))
      //  .to.equal( true );
      //
      //logSpy.restore();
      //done();

      var log = console.log( d );
      console.log( d );

      //this.sinon.stub(console, 'log', function() {
      //  return log.apply(log, arguments);
      //});

      cli([ 'dad' ] );

      //expect( log[chalk.hasColor( 'green')] ).to.equal( true );
      expect (log).to.contain( '\u001b[32' );
    });

    test.skip( 'if not a strict palindrome, key\'s value is false', function() {
      var strictTest = cli([ 'ab bba' ]);

      expect ( strictTest[ 0 ])
        .to.have.property( 'strict' )
        .that.deep.equals( false );
    });

    test.skip( 'if not a strict palindrome, console message should be red', function( done ) {
      var logSpy = sinon.spy( console, 'log' );
      cli([ 'sfjlsdksfjldk' ] );
      expect( chalk.hasColor( '\u001b[32' ))
        .to.equal( true );

      logSpy.restore();
      done();

    });
  });

  suite( 'loose', function() {
    test.skip( 'if a loose palindrome, key\'s value is true', function() {
      var looseTest = cli([ 'ab bba' ]);

      expect ( looseTest[ 0 ])
        .to.have.property( 'loose' )
        .that.deep.equals( true );
    });

    test.skip( 'if not a loose palindrome, key\'s value is false', function() {
      var looseTest = cli([ 'sdlfksdjlfk' ]);

      expect ( looseTest[ 0 ])
        .to.have.property( 'loose' )
        .that.deep.equals( false );
    });
  });
});

// process std out
