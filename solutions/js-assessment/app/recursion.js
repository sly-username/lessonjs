'use strict';
var exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function( data, dirName ) {
    // TODO make better and fufill second test

    var files = [];

//    console.log( 'data: %o', data );
//    console.log( 'dirname: %o', dirName );

    if ( data && data.files && data.files.length ) {
      data.files.forEach( function( file ) {
        if ( typeof file === 'string' ) {
          files.push( file );
        } else {
          files = Array.prototype.concat.apply( files, this.listFiles( file ));
        }
      }, this );
    }

//    console.log( 'returning: %o', files );
    return files;
  },

  permute: function( arr ) {

  },

  fibonacci: function( n ) {
    if ( n <= 1 ) {
      return n;
    }

    return this.fibonacci( n - 1 ) + this.fibonacci( n - 2 );
  },

  validParentheses: function( n ) {

  }
};
