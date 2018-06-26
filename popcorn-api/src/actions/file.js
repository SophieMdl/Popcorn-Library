import { store } from './../store.js'

const actions = {
  loadMovies: movies => store.dispatch({ type: 'LOAD_MOVIES', movies }),
  changeCurrentMovie: movie => store.dispatch({ type: 'CHANGE_MOVIE', movie }),
  applyVideoToCurrentMovie: youtubeKey => store.dispatch({ type: 'APPLY_VIDEO', youtubeKey }),
  searchMovie: searchText => store.dispatch({ type: 'SEARCH_MOVIE', searchText })
}

export default actions
