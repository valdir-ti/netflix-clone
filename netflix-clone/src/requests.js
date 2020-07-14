const API_KEY = "bddef262b1fdf275108c5e4217511f38";
const GENRE = "&with_genres=";

// https://api.themoviedb.org/3/movie/550?api_key=bddef262b1fdf275108c5e4217511f38

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionsMovies: `/discover/movie?api_key=${API_KEY}${GENRE}28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}${GENRE}35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}${GENRE}27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}${GENRE}10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}${GENRE}99`,
}

export default requests;
