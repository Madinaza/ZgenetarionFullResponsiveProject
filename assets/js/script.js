var TrandingSlider = new Swiper(".tranding-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 4,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoWidth: true,
    margin: 20,
    items: 5,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      900: {
        items: 3,
      },
      1200: {
        items: 6,
      },
    },
  });

  var $titleTab = $(".title_tab");
  $(".Accordion_item:eq(0)")
    .find(".title_tab")
    .addClass("active")
    .next()
    .stop()
    .slideDown(300);
  $(".Accordion_item:eq(0)").find(".inner_content").find("p").addClass("show");
  $titleTab.on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).next().stop().slideUp(500);
      $(this).next().find("p").removeClass("show");
    } else {
      $(this).addClass("active");
      $(this).next().stop().slideDown(500);
      $(this).parent().siblings().children(".title_tab").removeClass("active");
      $(this).parent().siblings().children(".inner_content").slideUp(500);
      $(this)
        .parent()
        .siblings()
        .children(".inner_content")
        .find("p")
        .removeClass("show");
      $(this).next().find("p").addClass("show");
    }
  });
});
