/*
 *
 */
(function(W){
  var D = W['document'];
  var _EMPTY = { FUNCTION : function(){}, OBJECT : {}, ARRAY : [], STRING  : "", NUMBER : 0 };
  var _qgyu = {};
  /// QGYU.dom
  (function( Q ){
    Q[ 'core' ] = (function(){
      var _qcore = {};
      _qcore[ 'mixin' ] = function( base, ext ){
        var _deriv = {};
        for ( var i in base ){ _deriv.prototype[ i ] = base[ i ]; }
        for ( var j in ext ){ _deriv.prototype[ j ] = ext[ j ]; }
        return _deriv;
      };
      _qcore[ 'firstOrDefault' ] = function(){
        var _type = arguments[ 0 ], _first = arguments[ 1 ];
        if ( typeof _type !== 'string' ) {
          throw new Q.exceptions.Arguments( 'firstOrDefault arg[0] must be string' );
        }
        return ( typeof _first === _type.toLowerCase() ) ? _first : _EMPTY[ _type.toUpperCase() ];
      };
      return _qcore;
    })();

    Q[ 'exceptions' ] = (function(){
      var _qex = {};
      var _ex = function( name ){
        var _ = function( msg ) {
          this.name = name;
          this.msg = msg || ""; 
        };
        _.prototype.what = function(){
          return this.name + " : " + this.msg;
        };
        return _;
      };
      [ 'Exception', 'ArgumentsException' ].forEach(function(ex) {
        _qex[ ex ] = new _ex( ex );
      });
      return _qex;
    })();

    Q[ 'capability' ] = (function(){
      var _cap = {        
      };
      return _cap;
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
          var _e = D.createElement( ele ), _as = arguments[ 0 ];
          for ( var a in _as ) {
            if ( _as[ 'hasOwnProperty' ]( a ) ) {
              _e.setAttribute( a, _as[ a ] );
            }
          }
          for ( var i = 1, n; n = arguments[ i ]; ++i ) {
            _e.appendChild( ( typeof n === 'string' ) ? D.createTextNode( n ) :  n ); 
          }
          return _e;
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
