"use strict";
$(document).ready(function () {
  $(function () {
    $(window).scroll(function () {
      $(".about__title").each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 650) {
          $(this).addClass("fadeInLeft");
        }
      });
    });

    $(window).scroll(function () {
      $(".item-1").each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 650) {
          $(this).addClass("fadeInLeft");
        }
      });
    });

    $(window).scroll(function () {
      $(".item-2").each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 650) {
          $(this).addClass("fadeInDown");
        }
      });
    });

    $(window).scroll(function () {
      $(".item-3").each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 650) {
          $(this).addClass("fadeInDown");
        }
      });
    });

    $(window).scroll(function () {
      $(".item-4").each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 650) {
          $(this).addClass("fadeInRight");
        }
      });
    });

    $(window).scroll(function () {
      $(".item-5").each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 650) {
          $(this).addClass("fadeInLeft");
        }
      });
    });

    $(window).scroll(function () {
      $(".item-6").each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 650) {
          $(this).addClass("fadeInUp");
        }
      });
    });

    $(window).scroll(function () {
      $(".item-7").each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 650) {
          $(this).addClass("fadeInUp");
        }
      });
    });

    $(window).scroll(function () {
      $(".item-8").each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 650) {
          $(this).addClass("fadeInRight");
        }
      });
    });

    $(window).scroll(function () {
      $(".reviews__title").each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 650) {
          $(this).addClass("fadeInLeft");
        }
      });
    });
  });

  // слайдер

  $(".slider").slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  // top arrow
  $(window).scroll(function () {
    let scrolled = $(window).scrollTop();

    if (scrolled > 300) {
      $("#back_to_top").addClass("active");
    } else {
      $("#back_to_top").removeClass("active");
    }
  });

  $("#back_to_top").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 1000);
  });
});
