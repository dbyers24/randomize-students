'use strict';

var xmlhttp = new XMLHttpRequest();
xmlhttp.open( 'GET', './students.txt', false );

console.log( 'xmlhttp :', xmlhttp );
console.log( 'xmlhttp property: ' + xmlhttp.abort );
console.log( xmlhttp.length );

var main = document.getElementById( 'main' );
console.log( main );
