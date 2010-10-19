(function(utest){
  utest.exist( 'QGYU.core exist', QGYU.core );
  utest.type( 'QGYU.core is object', QGYU.core, 'object' );

  utest.exist( 'QGYU.core.mixin exist', QGYU.core.mixin );
  utest.type( 'QGYU.core.mixin is function', QGYU.core.mixin, 'function' );
  utest.type( 'QGYU.core.mixin return object', QGYU.core.mixin({},{}), 'object' );

  utest.exist( 'QGYU.core.firestOrDefault exist', QGYU.core.firstOrDefault );
  utest.type( 'QGYU.core.firstOrDefault is function', QGYU.core.firstOrDefault, 'function' );
  utest.type( 'QGYU.core.firstOrDefault(function) ret func', QGYU.core.firstOrDefault('function'), 'function' );
  utest.is( 'QGYU.core.firstOrDefault(number,1) ret 1', QGYU.core.firstOrDefault('number', 1 ), 1 );
  utest.is( 'QGYU.core.firstOrDefault(number) ret 0', QGYU.core.firstOrDefault('number'), 0 );
  utest.is( 'QGYU.core.firstOrDefault(string) ret ""', QGYU.core.firstOrDefault('string'), '' );
  utest.type( 'QGYU.core.firstOrDefault({}) ret {}', QGYU.core.firstOrDefault('object'), 'object' );
})( new QGYU.test( 'core test', 0, new htmlWriter( document.getElementById( '01.core' ) ) ) );

