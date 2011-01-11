(function(utest){
  var c = QGYU.core;
  utest.exist( 'QGYU.core exist', c );
  utest.type( 'QGYU.core is object', c, 'object' );

  utest.exist( 'QGYU.core.mixin exist', c.mixin );
  utest.type( 'QGYU.core.mixin is function', c.mixin, 'function' );
  utest.type( 'QGYU.core.mixin return object', c.mixin({},{}), 'object' );

  utest.exist( 'QGYU.core.firestOrDefault exist', c.firstOrDefault );
  utest.type( 'QGYU.core.firstOrDefault is function', c.firstOrDefault, 'function' );
  utest.type( 'QGYU.core.firstOrDefault(function) ret func', c.firstOrDefault('function'), 'function' );
  utest.is( 'QGYU.core.firstOrDefault(number,1) ret 1', c.firstOrDefault('number', 1 ), 1 );
  utest.is( 'QGYU.core.firstOrDefault(number) ret 0', c.firstOrDefault('number'), 0 );
  utest.is( 'QGYU.core.firstOrDefault(string) ret ""', c.firstOrDefault('string'), '' );
  utest.type( 'QGYU.core.firstOrDefault({}) ret {}', c.firstOrDefault('object'), 'object' );

  utest.raised(
    'QGYU.core.firstOrDefault() raise QGYU.exceptions.Arguments',
    function(){ QGYU.core.firstOrDefault( 1 ); }, new QGYU.exceptions.ArgumentsException('') );
})( new QGYU.test( 'QGYU.core test', 0, new htmlWriter( document.getElementById( '01.core' ) ) ) );

