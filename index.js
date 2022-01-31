// get movies
const url = 'https://sky-frontend.herokuapp.com/movies'

function getMovies() {
  axios
    .get(url)
    .then((response) => {
      console.log(response.data)

      response.data.contents.forEach((film) => {
        img1.innerHTML += `
          <img class="movie-itens" src=${film.images[0].url} alt=${film.title} title=${film.price} price=${film.price}>
          `
      })
    })
    .catch((error) => console.log(error))
}

getMovies()

// image carousel
$('.carousel').slick({
  centerMode: true,
  centerPadding: '580px',
  slidesToShow: 1,
  slidesToScroll: 1,
  autoPlay: true,
  arrows: true,
  dots: true,
  autoplaySpeed: 500,
  responsive: [
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 1,
        centerPadding: '300px',
        slidesToScroll: 1,
        centerMode: true,
        dots: true,
      },
    },
    {
      breakpoint: 1260,
      settings: {
        centerMode: true,
        centerPadding: '250px',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 1080,
      settings: {
        centerMode: true,
        centerPadding: '120px',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 950,
      settings: {
        arrows: true,
        centerMode: true,
        dots: true,
        centerPadding: '60px',
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        dots: true,
        centerMode: true,
        centerPadding: false,
        slidesToShow: 1,
      },
    },
  ],
})
// images movies galery
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
        dots: false,
      },
    },
    {
      breakpoint: 1260,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 1030,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 8,
        infinite: false,
        dots: false,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
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
  ],
})

// view info movie

// $('#mouseHover').mouseover(function () {
//   $('#view').css('display', 'block')
// })

// $('#mouseHover').mouseout(function () {
//   $('#view').css('display', 'none')
// })
