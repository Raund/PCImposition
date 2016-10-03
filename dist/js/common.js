 $(function(){

/* появление и пропадание удобств */
  $('.r-tab').on('click', function(){
    $(this).parent().find('.conveniences-block').toggleClass('webstudio-active');
    $('.arrow-conveniences').toggleClass('rotate-90');
  });

  $('.services-title').on('click', function(){
    $(this).parent().find('.services-hide').toggleClass('webstudio-active');
    $('.services-arrow').toggleClass('rotate-90');
  });
  
  $('.services-arrow').on('click', function(){
    $(this).parent().parent().find('.services-hide').toggleClass('webstudio-active');
    $(this).toggleClass('rotate-90');
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

/* просмотр фото номеров */
  $('.webstudio-gallery-rooms').each(function(){
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
      slider_control_zoom: false,
    });
  });
/* END просмотр фото номеров */

/* просмотр фото на страницах Услуги, События, Галерея */  
  $('.webstudio-gallery').each(function(){
    var MyWidthEvents = $(this).parent().width()/4;
    var MyHeightEvents = MyWidthEvents/1.5;
    $(this).unitegallery({
    gallery_theme: "tilesgrid",
    gallery_width:"100%",              //gallery width   
    grid_space_between_cols:0,
    grid_space_between_rows:0,
    grid_space_between_mobile:0,
    tile_enable_border:false,
    tile_enable_shadow:false,
    grid_padding:0,
    tile_width: MyWidthEvents,
    tile_height: MyHeightEvents,
    grid_num_rows:10,  
    });
  });

/* END просмотр фото на страницах Услуги, События, Галерея */  

/* слайдер на главной*/
  var sliderApi = $("#webstudio-slider").unitegallery({
    gallery_theme: "slider",
    gallery_width:"100%",              //gallery width   
    gallery_height:470,
    slider_enable_text_panel: true,       //true,false - enable the text panel
    slider_textpanel_always_on: true,      //true,false - text panel are always on, false - show only on mouseover
    slider_textpanel_text_valign:"top",
    slider_textpanel_padding_top:165,
    slider_textpanel_height: 470, 
    slider_textpanel_bg_color:"#000000",      //textpanel background color
    slider_textpanel_bg_opacity: 0.6,
    slider_textpanel_title_text_align:"center", 
    slider_textpanel_title_color:"#fffafa",        //textpanel title color. if null - take from css
    slider_textpanel_title_font_family:"GeorgiaBoldItalic",    //textpanel title font family. if null - take from css
    slider_textpanel_title_font_size: 34,
    slider_textpanel_desc_text_align:"center", 
    slider_textpanel_desc_color:"#fffafa",        //textpanel title color. if null - take from css
    slider_textpanel_desc_font_family:"RobotoBold",    //textpanel title font family. if null - take from css
    slider_textpanel_desc_font_size: 20,
    slider_enable_bullets: false,
    slider_enable_progress_indicator: false,
    slider_control_zoom: false,
    slider_arrow_left_offset_hor:60,
    slider_arrow_right_offset_hor:60,
  });
/* END слайдер на главной*/

/* фото отеля в футере */
  var MyWidthFooter = $("div.hotel-photo").width()/3;
  var MyHeightFooter = MyWidthFooter/1.5;
  $("#webstudio-bottom-gallery").unitegallery({
    gallery_theme: "tilesgrid",
    gallery_width:"100%",              //gallery width   
    grid_space_between_cols:0,
    grid_space_between_rows:0,
    grid_space_between_mobile:0,
    tile_enable_border:false,
    tile_enable_shadow:false,
    grid_padding:0,
    tile_width: MyWidthFooter,
    tile_height: MyHeightFooter,
    grid_num_rows:2,  
  });
/* END фото отеля в футере */

  /*sliderApi.on("item_change", function(num, data){
    console.info(num, data);
    console.info('link>>>', $('#webstudio-slider img:nth-child('+num+')').attr('data-link'))
  });*/
});