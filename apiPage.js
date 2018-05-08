
$('#get-another-quote-button').on('click', function(e) {
    e.preventDefault();
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
      var post = a.shift(); //Gets new position in array
      $("#quote-source").append(post.content + "<p>&mdash; " + post.title + "</p>")
    });
  });
