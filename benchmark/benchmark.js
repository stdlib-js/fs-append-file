/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var join = require( 'path' ).join;
var bench = require( '@stdlib/bench-harness' );
var unlink = require( '@stdlib/fs-unlink' ).sync;
var pkg = require( './../package.json' ).name;
var appendFile = require( './../lib' );


// FIXTURES //

var TMP = join( __dirname, 'fixtures', 'temp.txt' );
var DATA = 'boop beep\n';


// MAIN //

bench( pkg, function benchmark( b ) {
	var i;

	i = 0;
	b.tic();

	return next();

	function next() {
		i += 1;
		if ( i <= b.iterations ) {
			return appendFile( TMP, DATA, done );
		}
		b.toc();
		unlink( TMP );
		b.pass( 'benchmark finished' );
		b.end();
	}

	function done( error ) {
		if ( error ) {
			b.fail( error.message );
		}
		next();
	}
});

bench( pkg+':sync', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = appendFile.sync( TMP, DATA );
		if ( out instanceof Error ) {
			b.fail( out.message );
		}
	}
	b.toc();
	unlink( TMP );
	if ( out instanceof Error ) {
		b.fail( out.message );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
