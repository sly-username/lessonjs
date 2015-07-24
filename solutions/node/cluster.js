'use strict';

var
  i,
  consumeClusterCount = false,
  consumePort = false,
  port = require( './package.json' ).config.port || 5115,
  args = global.process.argv.slice( 2 ),
  cluster = require( 'cluster' ),
  createServer = require( './server.js' ),
  numProcInCluster = require( 'os' ).cpus().length;

args.forEach( function( arg ) {
  if ( consumeClusterCount ) {
    numProcInCluster = arg;
  }

  if ( consumePort ) {
    port = parseInt( arg, 10 );
  }

  consumeClusterCount = arg === '-t';
  consumePort = arg === '-p';
});

if ( cluster.isMaster ) {
  for ( i = 0 ; i < numProcInCluster ; i++ ) {
    cluster.fork();
  }

  cluster.on( 'exit', function( worker, code, signal ) {
    console.log( 'worker ' + worker.process.pid + ' died, with code: ' + code + ' and signal: ' + signal );

    if ( worker.suicide === true ) {
      console.log( "it was server suicide" );
    } else {
      console.log( "replacing dead worker" );
      cluster.fork();
    }
  });
} else {
  console.log( 'port: ' + port );
  createServer( port );
}
