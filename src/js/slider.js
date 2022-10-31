import $ from "jquery";
import "slick-carousel";

$(".letters__slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,

  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      },
    },
  ],
});