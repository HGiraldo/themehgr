(function($) {

  Drupal.custom = Drupal.custom || {};
  var flag_ani = 0;
  var flag_menu = 0;

  Drupal.custom.stickyNav = function() {
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

      // Paralax
      var move = (scrollTop / 2);
      $('.content_quan_region.bg_blue').css('background-position', move + "%" + " " + move + "%");
      var move = (scrollTop / 2) * (-1);
      $('.content_process_region.bg_white').css('background-position', move + "%" + " " + move + "px");
      var move = (scrollTop / 4);
      $('.content_services_region.bg_blue').css('background-position', move + "%" + " " + move + "px");
      var move = (scrollTop / 5) * (-1);
      $('.content_clients_region.bg_white').css('background-position', move + "%" + " " + move + "%");
      var move = (scrollTop / 6);
      $('.content_slide_region.bg_blue').css('background-position', move + "%" + " " + move + "px");
      var move = (scrollTop / 7) * (-1);
      $('.content_people_region.bg_white').css('background-position', move + "%" + " " + move + "px");
      var move = (scrollTop / 8);
      $('.content_blog_region.bg_blue').css('background-position', move + "%" + " " + move + "%");
      var move = (scrollTop / 9) * (-1);
      $('.content_contact_region.bg_white').css('background-position', move + "%" + " " + move + "px");

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
      // Lock Scroll.
      // if ($('#modalContent').length) {
      //    $('body').css('overflow', 'hidden');
      //    $('body').css('height', '100%');
      //  }
      //  else {
      //    $('body').css('overflow', 'auto');
      //    $('body').css('height', 'auto');
      //  }
      if (location.hash) {
        offset = Number($(location.hash).offset().top)-Number(100);
        $('html, body').animate({
          scrollTop: offset
        }, 2000);
        location.hash = '';
        window.location.href.replace('/#.*/','');
      };
      // ANCLAS
      $('#block-menu-menu-menu-principal .block-content a').click(function (event) {
        if ($(this).attr('name').length) {
          $this_link = $(this);
          if ($('body').hasClass('front')) {
            event.preventDefault();
            var sum_offset = $this_link.parent().parent().height();
            if (Number(sum_offset) < 100) {
              sum_offset = 100;
            };
            offset = Number($("#" + $this_link.attr('name')).offset().top)-Number(sum_offset);

            $('html, body').animate({
                scrollTop: offset
            }, 2000);
          }
          else {
            event.preventDefault();
            window.location.replace($this_link.attr('href') + "#" + $this_link.attr('name'));
          }
        };
      });

      $('a.cotiza').click(function(e) {
        e.preventDefault();
        enlace = $(this).attr('href');
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
