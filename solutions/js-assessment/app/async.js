'use strict';
var exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function( value ) {
    return new Promise( function( resolve, reject ) {
      resolve( value );
    });
  },

  manipulateRemoteData: function( url ) {
    var http;

    return new Promise( function( resolve, reject ) {
      if ( typeof window === 'undefined' ) {
        // assume node
        http = require( 'http' );

        http.request({
          host: 'localhost',
          port: 4444,
          method: 'GET',
          path: url,
          headers: {
            'Content-Type': 'application/json'
          }
        }, function( res ) {
          // not finished...
          console.log( res );
        }).on( 'error', reject );
      } else {
        // in browser env
        http = new XMLHttpRequest();

        http.open( 'GET', url, true );
        http.setRequestHeader( 'Content-Type', 'application/json' );

        http.addEventListener( 'load', function() {
          if ( http.status === 200 ) {
            resolve( JSON.parse( http.responseText ));
          }
        });

        http.send();
      }
    })
      .then( function( data ) {
        if ( Array.isArray( data.people )) {
          return data.people.map( function( value ) { return value.name; });
        }

        if ( Array.isArray( data )) {
          return data.map( function( value ) { return value.name; });
        }

        return data;
      })
      .then( function( names ) {
        return names.sort();
      });
  }
};
