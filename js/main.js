"use strict";
document.addEventListener("DOMContentLoaded", function () {
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

  // popup
});
