'use strict';
var exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function( start, end ) {
    var
      timeoutId,
      timeoutTime = 100;

    console.log( start );

    timeoutId = setInterval( function() {
      start += 1;
      console.log( start );

      if ( start === end ) {
        clearInterval( timeoutId );
      }
    }, timeoutTime );

    // return cancel function
    return {
      timerId: timeoutId,
      cancel: function() {
        clearInterval( timeoutId );
      }
    };
  }
};
