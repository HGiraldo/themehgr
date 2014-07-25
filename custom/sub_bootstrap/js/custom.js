(function($) {

  Drupal.custom = Drupal.custom || {};
  var flag_ani = 0;
  var flag_menu = 0;

  Drupal.custom.stickyNav = function() {

     if ($('#modalContent').length) {
      $('body').css('overflow', 'hidden');
      $('body').css('height', '100%');
     }
     else {
      $('body').css('overflow', 'auto');
      $('body').css('height', 'auto');
     }

     if($(window).width() > 991) {
      var heightNav = $('#navbar').height();
      var scrollTop = $(window).scrollTop();
      var stickyNavTop = $('#navbar').offset().top+100;
      if (heightNav < scrollTop) {
        $('#navbar').addClass('sticky');
      }
      else {
        $('#navbar').removeClass('sticky');
      }
    }
    $( ".element-mobile" ).click(function() {
      if(flag_menu == 0){
        $( "#block-menu-menu-menu-principal ul" ).slideDown( "slow", function(){
          flag_menu = 1;
        });
      }else{
        $( "#block-menu-menu-menu-principal ul" ).slideUp( "slow", function(){
          flag_menu = 0;
        });
      }
    });
    $( "body" ).click(function() {
      if(flag_menu == 1){
      $( "#block-menu-menu-menu-principal ul" ).slideUp( "slow", function(){
          flag_menu = 0;
        });
    }
    });
    //if($(window).width() < 991) {
      //$('#navbar').addClass('sticky');
    //}
  };

  Drupal.behaviors.custom = {
    attach:function(context, settings) {
      // ANCLAS
      $('a.cotiza').click(function(e) {
        e.preventDefault();
        enlace  = $(this).attr('href');
        offset = Number($(enlace).offset().top)-Number(100);
        $('html, body').animate({
            scrollTop: offset
        }, 2000);
      });

      // MODALS.
      $('#modalContent .ctools-modal-dialog, #modalContent .modal-content #modal-content').css('height', 'auto');
      // Procesar Menu.
      Drupal.custom.stickyNav();
      // Add class responsive for LOGO.
      $('.navbar-header .logo img').addClass('img-responsive');
      // Ocultar en HOME.
      $('body.front a.hide-in-home').parent().hide();

      // ANIMACIONES DEL BLOQUE "NUESTRO PROCESO".
      $('.view-id-nuestro_proceso').once('animacion-nuestro-proceso', function() {
        $(this).addClass('quan-animation-our-procces');
      });

      $(window).scroll(function() {
        // Verificamos si sí existe el bloque ya procesado por el mismo JS.
        $list = $('.quan-animation-our-procces').find('li.views-row');
        $.each($list, function( index, value ) {
          var currentHW = $(window).height();
          var scrollW = $(window).scrollTop();
          var offset = $(value).offset();
          if (!$(value).hasClass('inview') && (offset.top - (currentHW - 70)) <= scrollW) {
            $(value).addClass('inview')
          }
        });
        // Procesar Menu.
        Drupal.custom.stickyNav();

      });


      $(window).resize(function () {
        // Procesar Menu.
        Drupal.custom.stickyNav();
      });
    }
  }
}(jQuery));
