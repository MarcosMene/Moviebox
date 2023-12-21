//get films with limit of list

export function getListMovies(size, movies) {
  let popularMovies = []

  for (let i = 0, l = size; i < size; i++) {
    popularMovies.push(movies[i])
  }

  return popularMovies
}

//generate random number from the size of movie list that has on application

export function randomBanner(movies) {
  return Math.floor(Math.random() * movies.length)
}
