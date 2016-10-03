var $ = require('jquery');

var csNav = {
  caseStudyNavigation: function() {
    // Identify all h2 on the page
    var headingNodes = document.querySelectorAll("h2");
    // Return and extract the text from h2s
    var headingText = Array.prototype.map.call(headingNodes, function(obj) {
      return obj.textContent;
    });

    // Create the Navigation with Heading Titles
    var list = document.createElement("ul");
    list.classList.add('case-study__nav');

    for (var i = 0; i < headingText.length; i++) {
      var item = document.createElement("li");
      var link = document.createElement('a');

      item.classList.add('case-study__nav__link');
      var anchorName = headingText[i].replace(/ /g,'').toLowerCase();
      link.setAttribute('href', "#")
      link.setAttribute('data-scroll-to', "#" + anchorName)
      link.appendChild(document.createTextNode(headingText[i]));
      item.appendChild(link)
      list.appendChild(item);
    }

    // Insert Nav into Sidebar of Case Study Layout
    $('#caseStudyNav').append(list);
  }
}

module.exports = csNav;
