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
  utest.type( 'typeof function(){} is object', function(){}, 'function' );
})( new QGYU.test( '', 0, htmlWriter ) );

