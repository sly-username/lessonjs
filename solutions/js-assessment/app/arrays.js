/*global exports*/
'use strict';

var exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {

  indexOf: function( arr, item ) {
    return arr.indexOf( item );
  },

  sum: function( arr ) {
    return arr.reduce( function( a, b ) { return a + b; });
  },

  remove: function( arr, item ) {
    return arr.filter( function( value ) { return value !== item; });
  },

  removeWithoutCopy: function( arr, item ) {
    var i = arr.length - 1;

    for ( ; i >= 0 ; i-- ) {
      if ( arr[i] === item ) {
        arr.splice( i, 1 );
      }
    }

    return arr;
  },

  append: function( arr, item ) {
    arr.push( item );
    return arr;
  },

  truncate: function( arr ) {
    arr.pop();
    return arr;
  },

  prepend: function( arr, item ) {
    arr.unshift( item );
    return arr;
  },

  curtail: function( arr ) {
    arr.shift();
    return arr;
  },

  concat: function( arr1, arr2 ) {
    return arr1.concat( arr2 );
  },

  insert: function( arr, item, index ) {
    arr.splice( index, 0, item );
    return arr;
  },

  count: function( arr, item ) {
    return arr.reduce( function( count, value ) {
      if ( value === item ) {
        return count + 1;
      }

      return count;
    }, 0 );
  },

  duplicates: function( arr ) {
    var dupes = [];

    arr.slice().sort().forEach( function( curr, index, sortedArr ) {
      if ( curr === sortedArr[ index + 1 ] && dupes.indexOf( curr ) === -1 ) {
        dupes.push( curr );
      }
    });

    return dupes;
  },

  square: function( arr ) {
    return arr.map( function( value ) {
      return value * value;
    });
  },

  findAllOccurrences: function( arr, target ) {
    var indexes = [];

    arr.forEach( function( value, index ) {
      if ( value === target ) {
        indexes.push( index );
      }
    });

    return indexes;
  }
};
