$('.carousel').slick({
  centerMode: true,
  centerPadding: '100px',
  slidesToShow: 1,
  autoPlay: true,
  arrows: true,
  dots: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        dots: true,
        centerPadding: '30px',
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        dots: true,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1,
      },
    },
  ],
})

$('.gallery').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 11,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
})
