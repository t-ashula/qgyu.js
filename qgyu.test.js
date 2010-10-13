/*
 *
 */
(function(Q){
  Q['test'] = (function(){
    var _test = function( name, plan, writer ){
      this.name_ = name || 'QGYU Test';
      this.plan_ = plan || -1;
      this.writer_ = writer || { 'ok' : function(){}, 'ng' : function(){} };
      var _verbs = [
         { 'verb' : 'is',    'cond' : function( g, e ) { return g == e; } }
        ,{ 'verb' : 'exact', 'cond' : function( g, e ) { return g === e; } }
        ,{ 'verb' : 'type',  'cond' : function( g, e ) { return typeof g === e; } }
        ,{ 'verb' : 'deep',
           'cond' : function( g, e ) {
             if ( typeof g !== typeof e ) {
               return false;
             }
             for ( var k in g ) {
               if ( g.hasOwnProperty( k ) ) {
                 if ( g[ k ] !== e[ k ] ) {
                   return false;
                 }
               }
             }
             return false;
           }
         }
      ];
      var _self = this;
      _verbs.forEach( function( v ){
        if ( !/not$/.test( v.verb ) ) {
          _verbs[ _verbs.length ] = {
            'verb' : v.verb + '_not',
            'cond' : function( g, e ){ return ! v.cond( g, e ); }
          };
        }
      });
      _verbs.forEach( function( v ) {
        _self[ v.verb ] = function( n, g, e ) {
          var _w = _self.writer_;
          if ( v.cond( g, e ) ){
            _w.ok( n, g, e );
          }
          else {
            _w.ng( n, g, e );
          }
        };
      });/**/
    };
    return _test;
  })();
})( window[ 'QGYU' ] );
