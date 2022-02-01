// get movies
const url = 'https://sky-frontend.herokuapp.com/movies'

function getMovies() {
  axios
    .get(url)
    .then((response) => {
      console.log(response.data)

      response.data.contents.forEach((film) => {
        img1.innerHTML += ` <div class="wrapper-img">
          <img class="movie-itens" src=${film.images[0].url} alt=${film.title} title=${film.year} price=${film.price}>
          <i class="fas fa-cart-plus cartIcon" onClick="onClickCart()" title=${film.price}></i></div>
          `
      })
    })
    .catch((error) => console.log(error))
}

getMovies()

// image carousel
$('.carousel').slick({
  centerMode: true,
  centerPadding: '590px',
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoPlay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1895,
      settings: {
        slidesToShow: 1,
        centerPadding: '480px',
        slidesToScroll: 1,
        centerMode: true,
        dots: true,
      },
    },
    {
      breakpoint: 1690,
      settings: {
        slidesToShow: 1,
        centerPadding: '420px',
        slidesToScroll: 1,
        centerMode: true,
        dots: true,
      },
    },
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
      breakpoint: 1090,
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
        dots: false,
        centerPadding: '60px',
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 520,
      settings: {
        arrows: true,
        dots: false,
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
        slidesToShow: 5,
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
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        dots: false,
      },
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2,
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

function onClickCart() {
  var x = confirm('Vamos adicionar esse item no seu carrinho, certo?')
  document.getElementById('Confirmação').innerHTML = x
}

function userLink() {
  window.location.href = 'https://github.com/Gilles30'
}
