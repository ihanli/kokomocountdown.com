var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-41177241-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

$( document ).ready( function() {
  $( '#timer' ).spriteTimer( {
    'isCountDown': true,
    'seconds': ( ( new Date( 'June 09, 2013 22:00:00' ) ) - ( new Date() ) ) / 1000,
    'digitImagePath': 'img/spritesheet.png',
    'digitWidth': 65,
    'digitHeight': 80
  } );
} );

$( window ).load( function() {
  offset = Math.floor( ( window.innerHeight - $( '#kokomo' ).height() ) / 2 );
  $( '#kokomo' ).css( 'top', offset + 'px' );
} );

$( window ).resize( function() {
  offset = Math.floor( ( window.innerHeight - $( '#kokomo' ).height() ) / 2 );
  $( '#kokomo' ).css( 'top', offset + 'px' );
} );
