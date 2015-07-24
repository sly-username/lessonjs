'use strict';
var exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function( fn, arr ) {
    return fn.apply( null, arr );
  },

  speak: function( fn, obj ) {
    return fn.call( obj );
  },

  functionFunction: function( str ) {
    return function( str2 ) {
      return str + ', ' + str2;
    };
  },

  makeClosures: function( arr, fn ) {
    return arr.map( function( value ) {
      return function() {
        return fn( value );
      };
    });
  },

  partial: function( fn, str1, str2 ) {
    return function( str3 ) {
      return fn( str1, str2, str3 );
    };
  },

  useArguments: function() {
    return Array.prototype.slice.call( arguments ).reduce( function( prev, curr ) {
      return prev + curr;
    }, 0 );
  },

  callIt: function( fn ) {
    return fn.apply( null, Array.prototype.slice.call( arguments, 1 ));
  },

  partialUsingArguments: function( fn ) {
    var args = Array.prototype.slice.call( arguments, 1 );

    return function() {
      args = Array.prototype.concat.apply( args, arguments );
      return fn.apply( null, args );
    };
  },

  curryIt: function( fn ) {
    var
      curryWrapper,
      args = Array.prototype.slice.call( arguments, 1 );

    curryWrapper = function( dummy ) {
      args = Array.prototype.concat.apply( args, arguments );

      if ( args.length >= fn.length ) {
        return fn.apply( null, args );
      }

      return curryWrapper;
    };

    return curryWrapper;
  }
};
