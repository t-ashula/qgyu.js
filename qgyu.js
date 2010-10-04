/*
 *
 */
(function(w){
  var _D = document;
  var _hop = 'hasOwnProperty';
  var _qgyu = {};

  /// QGYU.dom
  (function(Q){
    var _dom = {};
    var _html4 = [
      'html',
      'head','title','meta','link','script','style',
      'body','div','span','a','p','br','hr',
      'pre','blockquote','address',
      'table','thead','tbody','tfoot','caption','colgroup','cols','tr','th','td',
      'form','input','label','legend','button','textarea',
      'ul','ol','li','dl','dt',
      'h1','h2','h3','h4','h5','h6',
      'code','dfn','kbd',''
    ];
    _html4.forEach( function( ele ){
      _dom[ ele ] = _dom[ ele ] || function(){
        var e = _D.createElement( ele ), as = arguments[ 0 ];
        for ( var a in as ){
          if ( as[_hop]( a ) ){ e.setAttribute( a, as[ a ] ); }
        }
        for ( var i = 1, n; n = arguments[ i ]; ++i ) {
          e.appendChild( ( typeof n === 'string' ) ? _D.createTextNode( n ) :  n ); 
        }
        return e;
      };
    });
    Q['dom'] = Q['dom'] || _dom;
  })(_qgyu);  
  w['QGYU'] = w['QGYU'] || _qgyu;
})(window);
