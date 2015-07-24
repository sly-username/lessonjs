'use strict';
var exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function( fn, obj ) {
    return fn.call( obj );
  },

  alterObjects: function( constructor, greeting ) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function( obj ) {
    var prop, keys = [];

    // new school use Object.keys (it returns array of 'own' props)
//    return Object.keys( obj ).map(function( key ) { return key + ': ' + obj[ key ]; });

    // old school use for-in with statements "guarded" by 'hasOwnProperty'
    for ( prop in obj ) {
      if ( obj.hasOwnProperty( prop )) {
        keys.push( prop + ': ' + obj[ prop ]);
      }
    }

    return keys;
  }
};
