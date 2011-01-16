(function(utest){
  utest.is( '1 is 1', 1, 1 );
  utest.is( '1 is "1"', 1, "1" );
  utest.is_not( '1 is not 2', 1, 2 );
  utest.is_not( '{} is not {}', {}, {} );
  utest.exact    ( '"1" is exact "1"',   "1", "1" );
  utest.exact    ( '1 is exact 1',        1,   1 );
  utest.exact_not( '"1" is not exact 1', "1", 1 );
  utest.exact_not( '{} is not exact {}',  {}, {} );
  utest.exact_not( '[] is not exact []',  [], [] );
  utest.exact_not( 'NaN is not exact NaN',  0/0, 0/0 );
  utest.type( 'typeof 1 is number', 1, 'number' );
  utest.type( 'typeof "1" is string', '1', 'string' );
  utest.type( 'typeof {} is object', {}, 'object' );
  utest.type( 'typeof [] is object', [], 'object' );
  utest.type( 'typeof function(){} is function', function(){}, 'function' );

  utest.like( 'string like String', "", String(""));
  utest.like( '0 like Number(0)', 0, Number(0));
  utest.like( 'new Image() like HTMLImageElement ?', new Image(), document.createElement('img') );

  utest.exist( 'exist window', window );
  utest.exist( 'exist qgyu', QGYU );
  utest.exist( 'exist 0', 0 );
  utest.exist_not( 'not exist undef', undefined );
  utest.exist_not( 'not exist null', null );

  utest.raised( 'raise exception "foo"', function(){ throw 'foo'; } );
  utest.raised( 'raise exception is "foo" ?', function(){ throw 'foo'; }, 'foo' );
  utest.raised_not( 'raise exception is not "bar" ?', function(){ throw 'foo'; }, 'bar' );

})( new QGYU.test( 'test fw test', 0, new htmlWriter( document.getElementById( '00.test' ) ) ) );

