$(function() {
  function generateThumbnails($slides) {
    $slides.each(function() {
      var $slide = $(this),
          $list = $("#thumbnails"),
          src = $slide.find("img").attr("src");

      $list.append('<li><a href="#"><img src="' + src + '"></a></li>')
    });
  }

  var $slides = $("#slideshow figure");

  generateThumbnails($slides);

  $("#thumbnails").on('click', 'a', function(e) {
    e.preventDefault();
    var $thumb = $(e.target),
        $li = $thumb.closest('li'),
        idx = $li.index();

    $slides.fadeOut();
    $slides.eq(idx).fadeIn();
  });
});
