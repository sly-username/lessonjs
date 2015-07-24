'use strict';

var
  handler,
  setPort = 5115, // fallback port number
  consumePort = false, // flag for arg parsing
  args = global.process.argv.slice( 2 ),
  http = require( 'http' ),
  url = require( 'url' ),
  palindrome = require( './src/palindrome' );

handler = function( req, res ) {
  var
    parsedUrl = url.parse( req.url, true ),
    result = palindrome( parsedUrl.query.input || '' );

  console.log( 'saw request: ' + parsedUrl.href );
  console.log( 'returning result: ' + JSON.stringify( result ));

  res.writeHead( 200, {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  });

  res.end( JSON.stringify( result ));
};


module.exports = function( port ) {
  var server = http.createServer( handler );

  if ( port && typeof port === 'number' ) {
    console.log( 'starting server on port: ' + port );
    server.listen( port );
  }

  return server;
};

// if executed via cli
if ( require.main === module ) {
  args.forEach( function( arg ) {
    if ( consumePort ) {
      setPort = parseInt( arg, 10 );
    }

    consumePort = arg === '-p';
  });

  module.exports( setPort );
}
