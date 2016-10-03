var smoothScroller = {
  smoothScroller: function() {
    function bindScrollTriggers() {
      var nodes = window.document.querySelectorAll('[data-scroll-to]');
      if (nodes.length === 0) {
        return;
      }

      for (var i = 0; i < nodes.length; i++) {
        ((node) => {

          var scrollToSelector = node.dataset.scrollTo;
          var scrollToTarget = window.document.querySelector(scrollToSelector);

          if (!scrollToTarget) {
            return;
          }

          node.addEventListener('click', (e) => {
            e.preventDefault();

            scrollToTop(scrollToTarget);
          });

        })(nodes[i]);
      }
    }

    const MOTION_DURATION = 1000;

    // easeOutCubic
    const EASING_FUNCTION = function(x, t, b, c, d) {
      return c*((t=t/d-1)*t*t + 1) + b;
    };

    function scrollToTop(node) {
      const startTime = Date.now();
      const startValue = window.document.body.scrollTop;
      const endValue = window.document.body.scrollTop + node.getBoundingClientRect().top - 118;

      function tick() {
        const currentTime = Date.now();
        const elapsed = (currentTime - startTime);
        const percent = elapsed / MOTION_DURATION;

        var value = EASING_FUNCTION(percent, elapsed, startValue, (endValue - startValue), MOTION_DURATION);

        window.scrollTo(0, value);

        if ((startTime + MOTION_DURATION) > currentTime) {
          window.requestAnimationFrame(tick);
        }
      }
      tick();
    }
    bindScrollTriggers();
  }
}

module.exports = smoothScroller;
