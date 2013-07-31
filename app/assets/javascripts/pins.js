jQuery(function() {
  return $('#pins').imagesLoaded(function() {
    return $('#pins').masonry({
      itemSelector: ".box"
    });
  });
});