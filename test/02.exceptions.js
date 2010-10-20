(function( utest ){
  utest.exist( 'exist QGYU.exceptions', QGYU.exceptions );
  utest.type ( 'QGYU.exceptions is object', QGYU.exceptions, 'object' );

  var exs = [ 'Exception', 'ArgumentsException' ];
  exs.forEach( (function( en ){
    var ee = QGYU.exceptions[ en ];
    utest.exist( 'exist QGYU.exceptions.' + en, ee );
    utest.type ( 'QGYU.exceptions.' + en + ' is function', ee, 'function' );
    var msg = 'mmm';
    (function( e ){
      utest.exist( 'exist QGYU.exceptions.' + en + '.what', e.what );
      utest.type ( 'QGYU.exceptions.' + en + '.what is function', e.what, 'function' );
      utest.type ( en + '.what() ret string', e.what(), 'string' );
      utest.is   ( en + '.what() return ', e.what(), en + ' : ' + msg );
    })( new ee( msg ) );
  }));
})( new QGYU.test( 'QGYU.core test', 0, new htmlWriter( document.getElementById( '02.exceptions' ) ) ) );

