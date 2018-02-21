
  $(".center-icon").on("click", function(){
    $(".details").css('display', "block")
  })

  $("#slideshow > div:gt(0)").hide();

  setInterval(function() {
    console.log("slideshow working")
    $('#slideshow > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
  }, 4000)
