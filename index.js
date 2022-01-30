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
