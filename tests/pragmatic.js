var
  results,
  toTest = [ 'abba', 'ab bba', 'racecar', '0101', 'a man a plan a canal panama' ],
  panama = require( '../src/panama.js' );

results = toTest.map( panama );

console.log( results );
