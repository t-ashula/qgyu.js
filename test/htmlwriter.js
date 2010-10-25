var htmlWriter = function(to){ this.to = to; };
htmlWriter.prototype = QGYU['testWriter'];
htmlWriter.prototype.ok = function( n, g, e ){
  (this.to).appendChild( 
    QGYU.dom.div( { 'class' : 'ok' }, QGYU.dom.p( {}, 'TEST : ' + n + ' ok ' ) ) );
};
htmlWriter.prototype.ng = function( n, g, e ){
  (this.to).appendChild(
    QGYU.dom.div(
      { 'class' : 'ng' }, 
      QGYU.dom.p( {}, 'TEST : ' + n + ' failed ' ),
      QGYU.dom.p( {}, 'Expected : <' + e + '>' + '[' + typeof e + ']' ),
      QGYU.dom.p( {}, 'Got      : <' + g + '>' + '[' + typeof g + ']' ) ) );
};