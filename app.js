$(document).ready(function(){
    $('.display-container').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 800,
      });
  });
  $(document).ready(function(){
	$("button").click(function(){
		$("#dp_menu > ul").toggle(500);
		$("#dp_menu").toggleClass("show");
	});
});
  