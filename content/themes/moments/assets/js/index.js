/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        var $postContent = $(".post-content");
        $postContent.fitVids();

        $(".scroll-down").arctic_scroll();
    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        },

        allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });

    };
})(jQuery);

// Toggle Mobile Navigation Open/Close
function toggleMobileNav() {
  $('#mobileNavTrigger').click(function(e) {
    e.preventDefault();

    $('#mobileNav').toggleClass('showtime');

    // Toggle menu text from Menu to Close
    if ( $('#mobileNav').hasClass('showtime') ) {
      $('#mobileNavTrigger').text('CLOSE');
    }
    else {
      $('#mobileNavTrigger').text('MENU');
  }
  });
}

// Close Mobile Navigation on resize
function closeMobileNav() {

  // If the window is larger than 10px, remove the showtime class
  // from the mobile navigation to collapse it
  $(window).resize( function() {
    var width = $(window).width();

    if (width > 10) {
      $('#mobileNav').removeClass('showtime');
    }
  });
}


toggleMobileNav();
closeMobileNav();
toggleNavHook();
