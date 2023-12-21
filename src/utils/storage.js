import AsyncStorage from '@react-native-async-storage/async-storage'

//get saved films
export async function getMoviesSave(key) {
  const myMovies = await AsyncStorage.getItem(key)

  let moviesSave = JSON.parse(myMovies) || []

  return moviesSave
}

//save new movie
export async function saveMovie(key, newMovie) {
  let moviesStored = await getMoviesSave(key)

  //if there is a film with same id, dont save
  const hasMovie = moviesStored.some((item) => item.id === newMovie.id)

  if (hasMovie) {
    return
  }

  moviesStored.push(newMovie)

  await AsyncStorage.setItem(key, JSON.stringify(moviesStored))
}

//delete a specific movie
export async function deleteMovie(id) {
  let moviesStored = await getMoviesSave('@moviebox')

  let myMovies = moviesStored.filter((item) => {
    return item.id !== id
  })

  await AsyncStorage.setItem('@moviebox', JSON.stringify(myMovies))
  return myMovies
}

//filter saved movies
export async function hasMovie(movie) {
  let moviesStored = await getMoviesSave('@moviebox')

  const hasMovie = moviesStored.find((item) => item.id === movie.id)

  if (hasMovie) {
    return true
  }
  return false
}
