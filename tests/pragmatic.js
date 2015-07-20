var
  results,
  toTest = [ 'abba', 'ab bba', 'racecar', '0101' ],
  panama = require( './src/panama.js' );

results = toTest.map( panama );

console.log( results );
