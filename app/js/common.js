 $(function(){

 	$('.r-tab').on('click', function(){
 		var idTab = $(this).attr('data-tab');
 		$('.r-tab').removeClass('active');
 		$(this).addClass('active');

 		$('.r-tab-data').fadeOut('500');
 		$(idTab).delay('500').fadeIn('500');
  	});

  	$('.percent').hover(
		function(){
			$(this).parent().find('.discount').slideDown(200);
		},
		function(){
			$(this).parent().find('.discount').slideUp(200);
		}
  	);

    var dateFormat = "dd/mm/yy",
      from = $( "#from" )
        .datepicker({
          defaultDate: "0",
          changeMonth: true,
          numberOfMonths: 3,
          dateFormat: dateFormat,
          minDate: new Date()
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#to" ).datepicker({
        defaultDate: "0",
        changeMonth: true,
        numberOfMonths: 3,
        dateFormat: dateFormat,
        minDate: new Date()
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }

	 $('.bxslider').bxSlider({
      mode: 'horizontal',
      auto: true,
      pause: 3000,
      autoHover: true,
      controls: true,
      responsive: true,
      slideWidth: 1400,
      minSlides: 1,
      maxSlides: 1,
      moveSlides: 1,
      slideMargin: 0, 
      captions: true
    });

});