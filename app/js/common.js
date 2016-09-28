 $(function(){

/* появление и пропадание удобств */

  $('.r-tab').on('click', function(){
    $(this).parent().find('.conveniences-block').toggleClass('active-conveniences');
  });

/* END появление и пропадание удобств */

/* выбор даты бронирования */

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

/* END выбор даты бронирования */

/* слайдер на главной*/

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

/* END слайдер на главной*/
  $('.gallery').each(function(){
    $(this).unitegallery({
      gallery_theme: "compact",
      gallery_width:"100%",              //gallery width   
      gallery_height:285,
      thumb_width:85,
      thumb_height:55,
      strip_space_between_thumbs:0,
      thumb_border_width:0,
      thumb_over_border_width:0,
      thumb_image_overlay_effect:false,
      thumb_border_effect:false,
      thumb_color_overlay_effect:false,
      slider_enable_arrows: false,
      slider_enable_zoom_panel: false,
      strippanel_enable_handle: false,
      strippanel_padding_top:0,         //space from top of the panel
      strippanel_padding_bottom:0,
      strippanel_padding_right:0,         //space from top of the panel
      strippanel_padding_left:0,
      slider_enable_zoom_panel: false,
    });
  });

  var sliderApi = $("#webstudio-slider").unitegallery({
    gallery_theme: "slider",
    gallery_width:"100%",              //gallery width   
    gallery_height:470,
    slider_enable_text_panel: true,       //true,false - enable the text panel
    slider_textpanel_always_on: true,      //true,false - text panel are always on, false - show only on mouseover
    slider_textpanel_text_valign:"top",
    slider_textpanel_padding_top:200,
    slider_textpanel_height: 500, 
    slider_textpanel_title_text_align:"center", 
    slider_textpanel_title_color:null,        //textpanel title color. if null - take from css
    slider_textpanel_title_font_family:"GeorgiaBoldItalic",    //textpanel title font family. if null - take from css
    slider_textpanel_title_font_size:null,
    slider_textpanel_desc_text_align:"center", 
  });

  sliderApi.on("item_change", function(num, data){
    console.info(num, data);
    console.info('link>>>', $('#webstudio-slider img:nth-child('+num+')').attr('data-link'))
  });
});