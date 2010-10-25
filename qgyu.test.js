/*
 * QGyu Test FW
 * 
 */
(function( Q ){
  Q[ 'testWriter' ] = (function(){
    var _writer = {
      to : undefined,
      ok : function(){},
      ng : function(){},
      a : function(){},
      b : function(){},
      h : function(){}
    };
    return _writer;
  })( Q );
  Q[ 'test' ] = (function(){
    var _test = function( name, plan, writer ){
      this.name_ = name || 'QGYU Test';
      this.plan_ = plan || -1;
      this.count_ = 0;
      this.writer_ = writer;
      var nwr = Q['testWriter'];
      for( var op in nwr ){
        if ( nwr.hasOwnProperty( op ) ) {
          if ( !this.writer_[ op ] ) {
            this.writer_[ op ] = nwr[ op ];
          }
        }
      }
      var _verbs = [
         { 'verb' : 'is',    'cond' : function( g, e ) { return g == e; } }
        ,{ 'verb' : 'exact', 'cond' : function( g, e ) { return g === e; } }
        ,{ 'verb' : 'type',  'cond' : function( g, e ) { return (typeof g) === e; } }
        ,{ 'verb' : 'exist', 'cond' : function( g ) { return g !== undefined && g !== null; } }
        ,{ 'verb' : 'raised',
           'cond' : function( g, e ) {
             if ( typeof g !== 'function' ){
               return true;
             }
             try {
               g();
             }
             catch (exp) {
               if ( e ){
                 return exp.name && e.name && exp.name === e.name || e === exp;
               }
               return true;
             }
             return false;
           } }

/*        ,{ 'verb' : 'deep',
           'cond' : function( g, e ) {
             function deeply( lhs, rhs ) {
               if ( typeof lhs !== typeof rhs ){
                 return false;
               }
               if ( typeof lhs !== 'object' ) {
                 return lhs === rhs;
               }
               if ( lhs instanceof Array && rhs instanceof Array ){
                 if ( lhs.length !== rhs.length ) {
                   return false;
                 }
                 for ( var i = 0, len = lhs.length; i < len; ++i ) {
                   if ( !deeply( lhs[i], rhs[i] ) ) {
                     return false;
                   }
                 }
                 return true;
               }
               if ( lhs instanceof Function && rhs instanceof Function ) {
                 return true;// FIXME
               }
               for ( var l in lhs ){ if ( lhs.hasOwnProperty( l ) ) { if ( !deeply( lhs[ l ], rhs[ l ] ) ) { return false; } } }
               for ( var r in rhs ){ if ( rhs.hasOwnProperty( r ) ) { if ( !deeply( lhs[ r ], rhs[ r ] ) ) { return false; } } }
               return true;
             }             
             return deeply( g, e );
           }
         }
*/         
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
          var _c = _self.count_;
          if ( _c === 0 ){ _w.h(); }
          _self.count_++;
          var res = v.cond( g, e );
          _w.b( n, g, e );
          if ( res ){
            _w.ok( n, g, e );
          }
          else {
            _w.ng( n, g, e );
          }
          _w.a( n, g, e );
          return res;
        };
      });/**/
    };
    return _test;
  })();
})( window[ 'QGYU' ] );
