(function(utest){
  utest.exist( 'exitst QGYU.capability', QGYU.capability );
  var caps = [
    'createElement', 'createElementNS',
    'querySelector', 'querySelectorAll',
    'getElementById', 'getElementsByTagName', 
    'addEventListener', 'removeEventListener', 'dispatchEvent', 'DOM2Event',
    'XHR', 'WebSockets', 'EventSource',
    'LocalStorage', 'SessionStorage', 'WebDatabase', 'IndexedDB',
    'WebWorker',
    'video', 'audio', 'canvas', 'svg'
  ];
  caps.forEach( function( cap ){
    utest.exist( 'QGYU.capability.' + cap + ' exist', QGYU.capability[ cap ] );
    utest.exact( 'your env. has QGYU.capability.' + cap, QGYU.capability[ cap ], true );
  });
  
})( new QGYU.test( 'QGYU.capability test', 0, new htmlWriter( document.getElementById( '03.capability' ) ) ) );

