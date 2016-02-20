$(document).ready(function($) {

	$('.card__share > a').on('click', function(e){ 
		e.preventDefault() // prevent default action - hash doesn't appear in url
   		$(this).parent().find( 'div' ).toggleClass( 'card__social--active' );
		$(this).toggleClass('share-expanded');
    });

        var $mq = $('.marquee2, .marquee3').marquee({
        pauseOnHover: true,
        direction: 'right'
    });

    //Pause
    $('.t').click(function(){
        $mq.marquee('toggle');
    });

    setInterval(function(){
        $('.marquee2').marquee('toggle');
    },700);
    $('.marquee').marquee({
        //speed in milliseconds of the marquee
        duration: 10000,
        pauseOnHover: true,
        //time in milliseconds before the marquee will start animating
        delayBeforeStart: 0,
        //'left' or 'right'
        direction: 'right',
        //true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: true
    });
  
});

