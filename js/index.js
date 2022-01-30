$('.carousel').slick({
  centerMode: true,
  centerPadding: '600px',
  slidesToShow: 1,
  autoPlay: true,
  arrows: true,
  dots: true,
  autoplaySpeed: 500,
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
  slidesToShow: 9,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-chevron-left button-icon-prev"></i>',
  nextArrow: '<i class="fas fa-chevron-right button-icon-next"></i>',
  responsive: [
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 8,
        infinite: false,
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

const url = 'https://sky-frontend.herokuapp.com/movies'

function getMovies() {
  axios
    .get(url)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => console.log(error))
}

getMovies()
