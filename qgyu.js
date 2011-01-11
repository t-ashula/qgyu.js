/*
 *
 */
(function(W){
  var D = W['document'];
  var _qgyu = {};
  (function(Q){
    Q[ 'const' ] = (function(){
      var _const = {
        EMPTY : { FUNCTION : function(){}, OBJECT : {}, ARRAY : [], STRING  : "", NUMBER : 0 }
      };
      return _const;
    })();
  })( _qgyu );
  (function(Q){
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
          throw new Q.exceptions.ArgumentsException( 'firstOrDefault arg[0] must be string' );
        }
        return ( typeof _first === _type.toLowerCase() ) ? _first : Q[ 'const' ].EMPTY[ _type.toUpperCase() ];
      };
      return _qcore;
    })( _qgyu );

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
      var _exs = [ 'Exception', 'ArgumentsException' ];
      for ( var i = 0, ex; ex = _exs[ i ]; ++i ) {
        _qex[ ex ] = new _ex( ex );
      };
      return _qex;
    })();

    Q[ 'capability' ] = (function(){
      var _ = function( l, t ){ return !!l && typeof l === t; };
      var _cap = {
        'createElement'          : (_( D.createElement, 'function' ) )
        ,'createElementNS'       : (_( D.createElementNS, 'function' ) )
        ,'querySelector'         : (_( D.querySelector, 'function' ) )
        ,'querySelectorAll'      : (_( D.querySelectorAll, 'function' ) )
        ,'getElementById'        : (_( D.getElementById, 'function' ) )
        ,'getElementsByTagName'  : (_( D.getElementsByTagName, 'function' ) )
        ,'addEventListener'      : (_( D.addEventListener, 'function' ) )
        ,'removeEventListener'   : (_( D.removeEventListener, 'function' ) )
        ,'dispatchEvent'         : (_( D.dispatchEvent, 'function' ) )
        ,'XHR'                   : (_( W.XMLHttpRequest, 'function' ) )
        ,'WebSockets'            : (_( W.WebSocket, 'function' ) )
        ,'EventSource'           : (_( W.EventSource, 'function' ) )
        ,'LocalStorage'          : (_( W.localStorage, 'object' ) )
        ,'SessionStorage'        : (_( W.sessionStorage, 'object' ) )
        ,'WebDatabase'           : (_( W.openDatabase, 'function' ) )
        ,'IndexedDB'             : (_( W.indexedDB, 'function' ) )
        ,'WebWorker'             : (_( W.Worker, 'function' ) )
      };
      _cap[ 'video' ] = (function(){
        if ( !_cap.createElement ) {
          return false;
        }
        var v = D.createElement( 'video' );
        return !!v && _( v.play, 'function' );
      })();
      _cap[ 'audio' ] = (function(){
        if ( !_cap.createElement ) {
          return false;
        }
        var v = D.createElement( 'audio' ) ;
        return !!v && _( v.play, 'function' );
      })();
      _cap[ 'canvas' ] = (function(){
        if ( !_cap.createElement ) {
          return false;
        }
        var v = D.createElement( 'canvas' ) ;
        return !!v && _( v.getContext, 'function' );
      })();
      _cap[ 'svg' ] = (function(){
        if ( ! _cap.createElementNS ) {
          return false;
        }
        var s = D.createElementNS( 'http://www.w3.org/2000/svg', 'svg' );
        return !!s && _( s.createSVGPoint, 'function' );
      })();
      _cap[ 'apng' ] = (function(){
     /**
      * apng-detect.js
      * 2010-06-13
      * By Elijah Grey, http://eligrey.com
      * http://code.eligrey.com/apng-detect/apng-detect.js
      * Public Domain. 
      * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
      */
	"use strict";
	var apngTest = new Image(),
	  ctx = D.createElement( "canvas" ).getContext( "2d" ), supported = false;
	apngTest.onload = function () {
	  ctx.drawImage( apngTest, 0, 0 );
	  _cap.apng = supported = ( ctx.getImageData( 0, 0, 1, 1 ).data[ 3 ] === 0 );
	};
	apngTest.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg==";
        return supported;
      })();
      _cap[ 'DOM2Event' ] = ( _cap.addEventListener && _cap.removeEventListener && _cap.dispatchEvent );
      return _cap;
    })();

    Q[ 'dom' ] = (function(){
      var _dom = {},
        _html4 = [
          'html', 'head','title','meta','link','script','style',
          'body','div','span','a','p','br','hr', 'pre','blockquote','address','ins','del',
          'table','thead','tbody','tfoot','caption','colgroup','cols','tr','th','td',
          'form','input','label','legend','button','textarea',
          'ul','ol','li','dl','dt','dd', 'h1','h2','h3','h4','h5','h6',
          'code','dfn','kbd','cite','q','img','object','applet' ],
        _html5 = [
          'embed', 'meter', 'video', 'audio', 'canvas'
        ];
      _html4.forEach( function( ele ){
        _dom[ ele ] = function(){
          var _e = D.createElement( ele ), _as = arguments[ 0 ], a;
          for ( a in _as ) {
            if ( _as.hasOwnProperty( a ) ) {
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
      var _qsel = function( sel, ctx ){
        return ( ctx || D ).querySelector( sel );
      };
      return _qsel;
    })();
    Q[ 'socket' ] = (function( ws ){
      var _fod = Q[ 'core' ][ 'firstOrDefault' ];
      return _fod( 'function', ws );
    })( W[ 'WebSocket' ] );
    Q[ 'XHR' ] = (function( xhr ){
      var _fod = Q[ 'core' ][ 'firstOrDefault' ];
      return _fod( 'function', xhr );
    })( W[ 'XMLHttpRequest' ] );
  })( _qgyu );
  W[ 'QGYU' ] = W[ 'QGYU' ] || _qgyu;
})( window );
