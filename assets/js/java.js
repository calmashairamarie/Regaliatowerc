$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});
$(window).scroll(function() {
  $('.fading').each(function() {

    var _win     = $(window),
        _ths     = $(this),
        _pos    = _ths.offset().top,
        _scroll = _win.scrollTop(),
        _height = _win.height();

    (_scroll > _pos - _height * .9) ? _ths.addClass('anim') : _ths.removeClass('anim');

  });
});
$.each( $('*'), function() { 
    if( $(this).width() > $('body').width()) {
        console.log("Wide Element: ", $(this), "Width: ", $(this).width()); 
    } 
});


$(document).ready(function(){

    // hide #back-top first
    $("#backTop").hide();
    
    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#backTop').fadeIn();
            } else {
                $('#backTop').fadeOut();
            }
        });

        $('#backTop').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

});


function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}


