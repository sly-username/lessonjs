'use strict';

var
  test = require( 'tape' ),
  isPalindrome = require( '../index' );

test( 'pragmatic api', function( assert ) {
  var
    testArray = [
      'abba',
      'ab bba',
      'racecar',
      '0101',
      'ab  b a'
    ],
    expectedResultsArray = [
      {
        input: 'abba',
        oneLiner: true,
        stripSpacesOneLiner: true
      },
      {
        input: 'ab bba',
        oneLiner: false,
        stripSpacesOneLiner: true
      },
      {
        input: 'racecar',
        oneLiner: true,
        stripSpacesOneLiner: true
      },
      {
        input: '0101',
        oneLiner: false,
        stripSpacesOneLiner: false
      },
      {
        input: 'ab  b a',
        oneLiner: false,
        stripSpacesOneLiner: true
      }
    ],
    resultsArray = testArray.map( isPalindrome );

  assert.equal( typeof resultsArray[ 0 ], 'object' );

  assert.deepEquals(
    resultsArray,
    expectedResultsArray,
    'results array deeply equals expected results'
  );

  assert.end();
});
