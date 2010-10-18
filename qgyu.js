/*
 *
 */
(function(W){
  var D = W['document'];
  var _EMPTY = { FUNCTION : function(){}, OBJECT : {}, ARRAY : [], STRING  : "" };
  var _qgyu = {};
  /// QGYU.dom
  (function(Q){
    Q[ 'core' ] = (function(){
      var _qcore = {};
      _qcore[ 'mixin' ] = function( base, ext ){
        var _deriv = { };
        for ( var i in base ){ _deriv[ i ] = base[ i ]; }
        for ( var j in ext ){ _deriv[ j ] = ext[ j ]; }
        return _deriv;
      };
      _qcore[ 'argunmentsException' ] = function(msg){ this.msg = msg; };
      _qcore[ 'firstOrDefault' ] = function(){
        var _type = arguments[ 0 ], _first = arguments[ 1 ];
        if ( typeof _type !== 'string' ) {
          throw new qcore[ 'argumentsException' ]( 'firstOrDefault arg[0] must be string' );
        }
        return ( typeof _first === _type ) ? _first : _EMPTY[ type.toUpper() ];
      };
      return _qcore;
    })();

    Q[ 'exception' ] = (function(){
      var _qex = {};
      _qex[ 'Exception' ] = function( name ){
        var _ex = function( msg ) {
          this.name = name;
          this.msg = msg;
        };
        _ex.prototype.what = function(){
          return this.name + " : " + this.msg;
        };
        return _ex;
      };
      _qex[ 'Arguments' ] = new _qex[ 'Exception' ]( 'ArgumentsException' );
    })();

    Q[ 'capability' ] = (function(){

    })();

    Q[ 'dom' ] = (function(){
      var _dom = {};
      var _html4 = [
        'html', 'head','title','meta','link','script','style',
        'body','div','span','a','p','br','hr', 'pre','blockquote','address','ins','del',
        'table','thead','tbody','tfoot','caption','colgroup','cols','tr','th','td',
        'form','input','label','legend','button','textarea',
        'ul','ol','li','dl','dt','dd', 'h1','h2','h3','h4','h5','h6',
        'code','dfn','kbd','cite','q','img','object','applet' ];
      _html4.forEach( function( ele ){
        _dom[ ele ] = function(){
          var e = D.createElement( ele ), as = arguments[ 0 ];
          for ( var a in as ) {
            if ( as[ 'hasOwnProperty' ]( a ) ) {
              e.setAttribute( a, as[ a ] );
            }
          }
          for ( var i = 1, n; n = arguments[ i ]; ++i ) {
            e.appendChild( ( typeof n === 'string' ) ? D.createTextNode( n ) :  n ); 
          }
          return e;
        };
      });
      return _dom;
    })();
    Q[ 'css' ] = (function(){
      var _qccs = {};      
      return _qccs;
    })();
    Q[ 'selector' ] = (function(){
      var _qsel = {};
      var _fod = Q[ 'core' ][ 'firstOrDefault' ];
      _qsel[ 'all' ] = (function( qsa ){ return _fod( 'function', qsa ); })( D['querySelectorAll'] );
      _qsel[ 'first' ] = (function( qs ){ return _fod( 'function', qs ); })( D['querySelector'] );
      return _qsel;
    })();
    Q[ 'socket' ] = (function(ws){
      var _fod = Q[ 'core' ][ 'firstOrDefault' ];
      return _fod( 'function', ws );
    })( W['WebSocket'] );
    Q[ 'XHR' ] = (function( xhr ){
      var _fod = Q[ 'core' ][ 'firstOrDefault' ];
      return _fod( 'function', xhr );
    })( W['XMLHttpRequest'] );
  })( _qgyu );
  W[ 'QGYU' ] = W[ 'QGYU' ] || _qgyu;
})( window );
