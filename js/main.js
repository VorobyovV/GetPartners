$(document).ready(function () {

  $('.header__burger').click(function () {
    $(this).children().toggleClass('active');
    $('.header__drop').toggleClass('active')
    $('body').toggleClass('fixed')
    return false;
  });


  $('.header__lang').click(function () {
    $(this).toggleClass('active');
    return false;
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.header__drop').length) {
      $('.header__burger').removeClass('active')
      $('.header__drop').removeClass('active')
      $('body').removeClass('fixed')
    }
    e.stopPropagation()
  });

  new Rellax('.rellax');




  new Parallax(document.getElementById('scene1'));
  new Parallax(document.getElementById('scene2'));
  new Parallax(document.getElementById('scene3'));
  new Parallax(document.getElementById('scene4'));
  new Parallax(document.getElementById('scene5'));

  var init2 = false;
  var swiper2;
  function swiperSlider() {
    if (window.innerWidth <= 768) {
      if (!init2) {
        init2 = true;
        swiper2 = new Swiper('.showcase__slider', {
          slidesPerView: 2,
          breakpoints: {
            320: {
              slidesPerView: 1.25,
              spaceBetween: 10,

            },
          },
        });
      }
    } else if (init2) {
      swiper2.destroy();
      init2 = false;
    }
  }

  swiperSlider();
  window.addEventListener('resize', swiperSlider);


  var init3 = false;
  var swiper3;
  function swiperSlider2() {
    if (window.innerWidth <= 768) {
      if (!init3) {
        init3 = true;
        swiper3 = new Swiper('.prosto__blocks', {
          slidesPerView: 2,
          breakpoints: {
            320: {
              slidesPerView: 1.25,
              spaceBetween: 10,

            },
          },
        });
      }
    } else if (init3) {
      swiper3.destroy();
      init3 = false;
    }
  }

  swiperSlider2();
  window.addEventListener('resize', swiperSlider2);
});







