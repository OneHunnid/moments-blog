var $ = require('jquery');

var mobileNav = {
  // Toggle Mobile Navigation Open/Close
  toggleMobileNav: function() {
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
  },

  // Close Mobile Navigation on resize
  closeMobileNav: function() {

    // If the window is larger than 10px, remove the showtime class
    // from the mobile navigation to collapse it
    $(window).resize( function() {
      var width = $(window).width();

      if (width > 10) {
        $('#mobileNav').removeClass('showtime');
      }
    });
  }
}

module.exports = mobileNav;
