$(document).ready(function(){
    $('#button_no').click(function(){
  	// console.log("jerk");
  	$('#leave').show();
  });

    if (window.innerWidth >= 800) {
    $('.character').animate({
      bottom: "+=475"}, 
      4000,
      'easeInOutQuart')
    }else if (window.innerWidth < 800){
      $('.character').animate({
        bottom: "+=275"}, 
        4000,
        'easeInOutQuart')
    }
    
  });

   $('#leave').quietflow({
    theme : "starfield",
    z_Index : -1
  });

  $('#button_yes').click(function(){
  	$('.question_one').hide();
  	$('.question_two').show();
  });

  $('#stress_submit').click(function(){
    $('body').animate({
        scrollTop: $('.carousel').offset().top
      },
      {
        duration:'slow',
        complete:function(){
          $('.slick-current').trigger("focus");
        }
      });

    
  });

  $('.carousel').slick({
  		dots: true,
  		infinite: true,
  		speed: 500,
  		fade: true,
  		cssEase: 'linear',
  		centerMode: true,
  		arrows: false,
      adaptiveHeight: true,
      accessibility: true,
	});

 $('#stress_submit').click(function(){
  //   // console.log($('#sliderInput').val());
  if ($('#sliderInput').val() == 1) {
    //console.log('jerk');
    $('.carousel').slick('slickGoTo', 0);
      // if (e.KeyCode == 39) {
      //   $('.carousel').slickNext();
      // }else{ (e.KeyCode == 37) 
      //   $('.carousel').slickNext();
      // }
    }else if ($('#sliderInput').val() == 2){
      // console.log('totally');
      $('.carousel').slick('slickGoTo', 1);
    }else if ($('#sliderInput').val() == 3){
      $('.carousel').slick('slickGoTo', 2);
    }else if ($('#sliderInput').val() == 4){
      $('.carousel').slick('slickGoTo', 3);
    }else if ($('#sliderInput').val() == 5){
      $('.carousel').slick('slickGoTo', 4);
    }else if ($('#sliderInput').val() == 6){
      $('.carousel').slick('slickGoTo', 5);
    }else if ($('#sliderInput').val() == 7){
      $('.carousel').slick('slickGoTo', 6);
    }else if ($('#sliderInput').val() == 8){
      $('.carousel').slick('slickGoTo', 7);
    }else if ($('#sliderInput').val() == 9){
      $('.carousel').slick('slickGoTo', 8);
    }else {
      $('.carousel').slick('slickGoTo', 9);
  }
});


