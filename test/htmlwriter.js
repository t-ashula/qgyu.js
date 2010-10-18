var htmlWriter = {
  ok : function( n, g, e ){
    document.body.appendChild( 
      QGYU.dom.div( { 'class' : 'ok' }, QGYU.dom.p( {}, 'TEST : ' + n + ' ok ' ) ) );
  },
  ng : function( n, g, e ){
    document.body.appendChild( 
      QGYU.dom.div(
        { 'class' : 'ng' }, 
        QGYU.dom.p( {}, 'TEST : ' + n + ' failed ' ),
        QGYU.dom.p( {}, 'Expected : <' + e + '>' + '[' + typeof e + ']' ),
        QGYU.dom.p( {}, 'Got      : <' + g + '>' + '[' + typeof g + ']' ) ) );
  }
};
