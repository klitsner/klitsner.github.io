/*jslint browser: true*/
/*global $, jQuery, alert*/

//want to add a load page so that it loads for a second before displaying

$(document).ready(function () {

          // if(!window.location.hash) {
          //   $('#logo-container>img').click(function(){
          //     window.location.href="about.html";
          //   });
          // }


    $(window).scroll(function () {


        if (100 < $(window).scrollTop() - 50) {
            $('.name').fadeOut('fast');
        } else {
            $('.name').fadeIn('fast');
        }

        $('.fade').each(function (i) {
            if ($(this).position().top < $(window).scrollTop() + 150 && $(this).position().top > $(window).scrollTop() - 300) {
              //  $(this).css('opacity', '0');
                $(this).animate({'opacity': '1'}, 500);
            } else {
              //  $(this).fadeTo(1000, 0);
                $(this).css('opacity', '0');
            }
        });
    });

    var roll = $('<h2>}</h2>')
    var rolls = $('<h2>{</h2>');
    $('.main-nav a').hover(function () {
        $(this).after(roll);
        $(this).prepend(rolls);
    }, function () {
        $(roll).remove();
        $(rolls).remove();
    });
});

//having trouble making them dissapear
